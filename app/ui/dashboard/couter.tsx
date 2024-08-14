'use client';

import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/src/providers/counter-store-provider';

export default function Counter() {
    const { count, incrementCount, decrementCount } = useCounterStore(
        (state) => state
    );

    return (
        <div>
            Count: {count}
            <hr />
            <Button type='button' onClick={() => void incrementCount()}>
                Increment Count
            </Button>
            <Button
                type='button'
                className='mx-2'
                onClick={() => void decrementCount()}
            >
                Decrement Count
            </Button>
        </div>
    );
}
