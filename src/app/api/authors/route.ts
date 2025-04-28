import { clientPromise } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const users = db.collection('user');

    const authors = await users.find().toArray();

    return NextResponse.json({
      data: authors,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
