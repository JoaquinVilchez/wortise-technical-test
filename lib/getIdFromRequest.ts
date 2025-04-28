import { ObjectId } from 'mongodb';
import { NextRequest } from 'next/server';

export function getIdFromRequest(req: NextRequest): string | null {
  const id = req.nextUrl.pathname.split('/').pop() ?? null;

  if (!id) return null;
  if (!ObjectId.isValid(id)) return null;

  return id;
}
