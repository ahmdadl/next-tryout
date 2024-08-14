import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';

export async function withAuthMiddleware(req: NextRequest) {
    const authMiddleware = NextAuth(authConfig).auth;
    return authMiddleware(req);
}
