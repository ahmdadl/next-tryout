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

// // export const config = {
// //     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// // };

// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ['en', 'de', 'ar'],

//     // Used when no locale matches
//     defaultLocale: 'en',
// });

export const config = {
    // Matcher entries are linked with a logical "or", therefore
    // if one of them matches, the middleware will be invoked.
    matcher: [
        // Match all pathnames except for
        // - … if they start with `/api`, `/_next` or `/_vercel`
        // - … the ones containing a dot (e.g. `favicon.ico`)
        '/((?!api|_next|_vercel|.*\\..*).*)',
        //   // However, match all pathnames within `/users`, optionally with a locale prefix
        //   '/([\\w-]+)?/users/(.+)'
    ],
};
