'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { IBlog } from '@/types/blog';
import { motion } from 'framer-motion';

interface BlogCardProps {
    blog: IBlog;
    index?: number;
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            {blog.coverImage && (
                <div className="h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={blog.coverImage}
                        alt={blog.title}
                    />
                </div>
            )}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-x-2 text-xs text-gray-500 mb-3">
                    {blog.tags && blog.tags.length > 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ECF9F7] text-[#1a7f7a]">
                            {blog.tags[0]}
                        </span>
                    )}
                    <span className="text-gray-300">|</span>
                    <time dateTime={new Date(blog.createdAt).toISOString()}>
                        {format(new Date(blog.createdAt), 'MMM d, yyyy')}
                    </time>
                </div>

                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#1a7f7a] transition-colors mb-2">
                    <Link href={`/blog/${blog.slug}`} className="focus:outline-none">
                        {blog.title}
                    </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                    {blog.excerpt}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <Link href={`/blog/${blog.slug}`} className="text-sm font-semibold text-[#1a7f7a] flex items-center group/link">
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    {blog.readingTime && (
                        <span className="text-xs text-gray-400">{blog.readingTime} min read</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
