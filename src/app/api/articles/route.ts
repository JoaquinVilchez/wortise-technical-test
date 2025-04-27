import { clientPromise } from '@/lib/db';
import { articleSchema } from '@/src/schemas/article';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = articleSchema.parse(body);

    // const result = await getSession();

    // if (!('data' in result)) {
    //   return NextResponse.json(
    //     { error: result.error.message },
    //     { status: 401 },
    //   );
    // }
    // const userId = result.data.user.id;

    const db = (await clientPromise).db(process.env.MONGODB_DB);
    await db.collection('articles').insertOne({
      ...data,
      authorId: '1',
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
