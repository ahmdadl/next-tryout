// next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        id: number;
    }

    interface JWT {
        id: number;
    }
}
