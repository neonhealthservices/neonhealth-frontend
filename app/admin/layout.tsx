'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import AdminNav from '@/components/admin/AdminNav';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Skip auth check for login page
        if (pathname === '/admin/login') {
            setLoading(false);
            return;
        }

        // Check for token
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
        }
        setLoading(false);
    }, [pathname, router]);

    return (
        <>
            {loading ? (
                <div className="min-h-screen flex justify-center items-center bg-gray-50">
                    <LoadingSpinner size="lg" />
                </div>
            ) : pathname === '/admin/login' ? (
                <>{children}</>
            ) : (
                <div className="flex bg-gray-50 min-h-screen">
                    <AdminNav />
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <header className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center">
                            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                            {/* Mobile menu button could go here */}
                        </header>
                        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
