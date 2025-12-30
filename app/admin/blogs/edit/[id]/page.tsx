'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const fetchBlog = async () => {
        try {
            const res = await fetch(`/api/blogs/${id}`);
            const data = await res.json();

            if (res.ok) {
                setBlog(data.blog);
            } else {
                alert('Blog not found');
                router.push('/admin/blogs');
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);
        const token = localStorage.getItem('adminToken');

        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error('Failed to update blog post');
            }

            router.push('/admin/blogs');
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog post');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
            {blog && (
                <BlogEditor
                    initialData={blog}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    );
}
