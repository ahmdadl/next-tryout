'use client';
import { atom } from '@mongez/react-atom';

export type UserAtom = {
    name: string;
    email: string;
    age: number;
    id: number;
};

export const userAtom = atom<UserAtom>({
    key: 'user',
    default: {},
});

// very important is to create the UserAtomProvider
export const UserAtomProvider = userAtom.Provider;
