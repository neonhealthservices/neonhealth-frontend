'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';

export default function NewBlogPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);
        const token = localStorage.getItem('adminToken');

        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error('Failed to create blog post');
            }

            router.push('/admin/blogs');
        } catch (error) {
            console.error('Error creating blog:', error);
            alert('Failed to create blog post');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
            <BlogEditor onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
    );
}
