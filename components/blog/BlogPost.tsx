'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import { IBlog } from '@/types/blog';
import RichTextRenderer from './RichTextRenderer';
import Link from 'next/link';

interface BlogPostProps {
    blog: IBlog;
}

export default function BlogPost({ blog }: BlogPostProps) {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 text-center">
                <div className="flex justify-center gap-2 mb-4">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-sm font-medium text-[#1a7f7a] bg-[#ECF9F7] rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 leading-tight">
                    {blog.title}
                </h1>

                <div className="flex items-center justify-center text-gray-400 gap-4 text-sm font-medium">
                    <time dateTime={new Date(blog.createdAt).toISOString()} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#1a7f7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
                    </time>
                    {blog.readingTime && (
                        <>
                            <span>•</span>
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#1a7f7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {blog.readingTime} min read
                            </span>
                        </>
                    )}
                </div>
            </div>

            {blog.coverImage && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                    />
                </div>
            )}

            <div className="bg-white rounded-xl p-0 md:p-4 overflow-hidden">
                <RichTextRenderer content={blog.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-[#1a7f7a] font-medium hover:underline group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all posts
                    </Link>

                    <div className="flex gap-4">
                        {/* Share buttons could go here */}
                    </div>
                </div>
            </div>
        </article>
    );
}
