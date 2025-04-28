import { clientPromise } from '@/lib/db';
import { articleSchema } from '@/src/schemas/article';
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

export async function PUT(request: NextRequest) {
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
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { error: 'No se proporcionó el cuerpo de la solicitud' },
        { status: 400 },
      );
    }

    const editableSchema = articleSchema
      .omit({ createdAt: true, authorId: true })
      .partial();

    const data = editableSchema.parse(body);

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data },
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: 'No se pudo actualizar el artículo' },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Artículo actualizado correctamente' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
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

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'No se pudo eliminar el artículo' },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Artículo eliminado correctamente' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
