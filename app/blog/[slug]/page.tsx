'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlogPost from '@/components/blog/BlogPost';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { IBlog } from '@/types/blog';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [blog, setBlog] = useState<IBlog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (slug) {
            fetchBlog();
        }
    }, [slug]);

    async function fetchBlog() {
        try {
            setLoading(true);
            const res = await fetch(`/api/blogs/${slug}`);

            if (!res.ok) {
                throw new Error('Blog post not found');
            }

            const data = await res.json();
            setBlog(data.blog);
        } catch (err: any) {
            setError(err.message || 'Failed to load blog post');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <LoadingSpinner size="lg" color="teal" />
                    </div>
                ) : error ? (
                    <div className="flex flex-col justify-center items-center h-[60vh] px-4">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h1>
                        <p className="text-lg text-gray-600 mb-8">{error}</p>
                        <a
                            href="/blog"
                            className="px-6 py-3 bg-[#1a7f7a] text-white rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            Back to Blog
                        </a>
                    </div>
                ) : blog ? (
                    <BlogPost blog={blog} />
                ) : null}
            </div>
            <Footer />
        </>
    );
}
