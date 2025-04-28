import { clientPromise } from '@/lib/db';
import { articleSchema } from '@/src/schemas/article';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = articleSchema.parse(body);

    const db = (await clientPromise).db(process.env.MONGODB_DB);
    await db.collection('articles').insertOne({
      ...data,
      authorId: '1',
      createdAt: new Date(),
    });

    // const result = await getSession();

    // if (!('data' in result)) {
    //   return NextResponse.json(
    //     { error: result.error.message },
    //     { status: 401 },
    //   );
    // }
    // const userId = result.data.user.id;

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const collection = db.collection('articles');

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '6', 10);
    const search = searchParams.get('search') || '';

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { body: { $regex: search, $options: 'i' } },
      ];
    }

    const totalArticles = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalArticles / limit);

    const articles = await collection
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      data: articles,
      currentPage: page,
      totalPages,
      totalArticles,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
