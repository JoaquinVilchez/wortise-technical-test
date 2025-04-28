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
      /*Este ID esta harcodeado debido a que no puedo acceder a la session desde el servidor, pero si desde el cliente como lo hice en navbar.
      Podria pasarlo a traves del formulario, pero no lo considero buena practica. Dejo para ultimo momento investigar
      como acceder a la session desde el servidor y asi poder obtener el ID del usuario loggeado. */
      authorId: '680a42ce7b61c44c610bb4fc',
      createdAt: new Date(),
    });

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
    const authorId = searchParams.get('authorId') || '';

    const query: Record<string, unknown> = {};

    if (authorId) {
      query.authorId = authorId;
    }

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
