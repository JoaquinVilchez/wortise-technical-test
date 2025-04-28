import { clientPromise } from '@/lib/db';
import { getIdFromRequest } from '@/lib/getIdFromRequest';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const collection = db.collection('user');

    const id = getIdFromRequest(request);
    if (!id) {
      return NextResponse.json(
        { error: 'ID inválido o no proporcionado' },
        { status: 400 },
      );
    }

    const author = await collection.findOne({ _id: new ObjectId(id) });

    if (!author) {
      return NextResponse.json(
        { error: 'Autor no encontrado' },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: author });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
