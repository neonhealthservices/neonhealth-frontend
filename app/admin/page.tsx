'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function AdminIndexPage() {
    const router = useRouter();

    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
        if (token) {
            router.replace('/admin/dashboard');
        } else {
            router.replace('/admin/login');
        }
    }, [router]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <LoadingSpinner size="lg" />
        </div>
    );
}
