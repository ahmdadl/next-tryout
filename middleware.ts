import {
    loggingMiddleware,
    withAuthMiddleware,
} from '@/src/middlewares/withAuthMiddleware';
import { NextRequest, NextResponse } from 'next/server';
import { withI18nMiddleware } from '@/src/middlewares/withI18nMiddleware';

export async function middleware(req: NextRequest) {
    // Execute auth middleware first
    let response: any = await withAuthMiddleware(req);
    if (response && response.status !== 200) {
        return response;
    }

    // Execute logging middleware next
    response = loggingMiddleware(req);
    if (response && response.status !== 200) {
        return response;
    }

    console.log('reaching here');

    // Run localization middleware first
    response = await withI18nMiddleware(req);
    if (response) {
        return response;
    }

    // Continue to Next.js if no middleware returned a response
    return NextResponse.next();
}

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
