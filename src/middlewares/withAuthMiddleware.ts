import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Authentication Middleware
export async function withAuthMiddleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    if (
        pathname.startsWith('/api/auth') ||
        token ||
        pathname === '/login' ||
        pathname.indexOf('dashboard') < 0
    ) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/en/login', req.url));
}

// Example of a custom middleware method (e.g., logging)
export function loggingMiddleware(req: NextRequest) {
    // console.log('Request URL:', req.url);
    // Allow the request to proceed
    return NextResponse.next();
}
