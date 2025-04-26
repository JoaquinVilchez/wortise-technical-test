import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const publicPaths = ['/login', '/signup'];
  const protectedPaths = ['/', '/articles'];

  if (session && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!session && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/articles', '/login', '/signup'],
};
