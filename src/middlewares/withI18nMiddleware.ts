import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import createNextIntlPlugin from 'next-intl/plugin';
import { middleware as paraglide } from '@/src/lib/i18n';

export async function withI18nMiddleware(request: NextRequest) {
    const response = paraglide(request);
    return response;
}
