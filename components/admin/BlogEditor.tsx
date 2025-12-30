'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import ImageKitUpload from './ImageKitUpload';

// Importing ReactQuill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface BlogEditorProps {
    initialData?: {
        title: string;
        content: string;
        excerpt: string;
        coverImage: string;
        status: 'draft' | 'published';
        tags: string[];
    };
    onSubmit: (data: any) => Promise<void>;
    isSubmitting: boolean;
}

export default function BlogEditor({ initialData, onSubmit, isSubmitting }: BlogEditorProps) {
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        content: initialData?.content || '',
        excerpt: initialData?.excerpt || '',
        coverImage: initialData?.coverImage || '',
        status: initialData?.status || 'draft',
        tags: initialData && initialData.tags ? initialData.tags.join(', ') : '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (content: string) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Process tags
        const tagsArray = formData.tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        onSubmit({
            ...formData,
            tags: tagsArray,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 gap-6 w-full">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
                    />
                </div>

                <div>
                    <ImageKitUpload
                        currentImage={formData.coverImage}
                        onSuccess={(url: string) => setFormData(prev => ({ ...prev, coverImage: url }))}
                    />
                </div>

                <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                        Excerpt (Short description)
                    </label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        required
                        rows={3}
                        value={formData.excerpt}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                    </label>
                    <div className="h-64 sm:h-80 mb-12">
                        <ReactQuill
                            theme="snow"
                            value={formData.content}
                            onChange={handleContentChange}
                            className="h-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                            Tags (comma separated)
                        </label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="Health, News, Cardiology"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1a7f7a] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a7f7a] disabled:opacity-50"
                >
                    {isSubmitting ? 'Saving...' : 'Save Blog Post'}
                </button>
            </div>
        </form>
    );
}
