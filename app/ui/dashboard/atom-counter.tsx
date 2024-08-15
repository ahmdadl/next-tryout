'use client';

import { Button } from '@/components/ui/button';
import { userAtom } from '@/src/providers/atoms';
import { Random } from '@mongez/reinforcements';

export default function AtomCounter() {
    const user = userAtom.useValue();

    return (
        <>
            <div className='p-5 shadow-lg'>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>User ID: {user.id}</p>
            </div>

            <Button
                type='button'
                onClick={() => userAtom.change('name', Random.string())}
            >
                Change Name
            </Button>
        </>
    );
}
