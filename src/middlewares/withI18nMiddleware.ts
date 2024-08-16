import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import createNextIntlPlugin from 'next-intl/plugin';
import createMiddleware from 'next-intl/middleware';
import { locales } from '../i18n';

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',
});

export async function withI18nMiddleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const shouldHandle =
        pathname === '/' ||
        new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
            request.nextUrl.pathname
        );
    if (!shouldHandle) return;

    return intlMiddleware(request);
}
