// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { withI18nMiddleware } from '@/src/middlewares/withI18nMiddleware';
import { withAuthMiddleware } from '@/src/middlewares/withAuthMiddleware';

export async function middleware(req: NextRequest) {
    console.log('asd sad sad sad sad');
    if (req.nextUrl.pathname === '/favicon.ico') {
        return NextResponse.next(); // Skip middleware for favicon
    }

    // Run localization middleware first
    let response: any = await withI18nMiddleware(req);
    if (response) return response;

    // Run NextAuth middleware next
    response = await withAuthMiddleware(req);
    if (response) return response;

    // Continue to Next.js if no middleware returned a response
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
