import { clientPromise } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const collection = db.collection('articles');

    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id = pathParts[pathParts.length - 1];

    if (!id) {
      return NextResponse.json(
        { error: 'ID inválido o no proporcionado' },
        { status: 400 },
      );
    }

    const article = await collection.findOne({ _id: new ObjectId(id) });

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
