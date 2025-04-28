import { clientPromise } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const collection = db.collection('articles');

    const article = await collection.findOne({ _id: new ObjectId(params.id) });

    if (!article) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 },
      );
    }

    return NextResponse.json(article);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
