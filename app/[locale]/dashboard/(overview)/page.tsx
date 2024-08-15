import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
    fetchCardData,
    fetchLatestInvoices,
    fetchRevenue,
} from '@/app/lib/data';
import { Suspense } from 'react';
import {
    CardsSkeleton,
    LatestInvoicesSkeleton,
    RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import Counter from '@/app/ui/dashboard/couter';
import { User } from '@/app/lib/definitions';
import { UserAtom, UserAtomProvider } from '@/src/providers/atoms';
import AtomCounter from '@/app/ui/dashboard/atom-counter';

export default async function Page() {
    const user: UserAtom = {
        name: 'John Doe',
        email: 'jKwzA@example.com',
        age: 25,
        id: 215456,
    };
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
                <Counter />
                <UserAtomProvider value={user}>
                    <AtomCounter />
                </UserAtomProvider>
            </h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}
