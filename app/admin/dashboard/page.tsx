'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Link from 'next/link';

export default function AdminDashboard() {
    type BlogStatus = {
        status?: 'draft' | 'published';
    };

    const [stats, setStats] = useState({
        totalBlogs: 0,
        publishedBlogs: 0,
        draftBlogs: 0,
        totalReviews: 0,
        totalTeamMembers: 0,
    });
    const [loading, setLoading] = useState(true);

    // In a real app we would have an API for stats,
    // for now we'll fetch all blogs and calculate locally
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/blogs?limit=100');
                const data = await res.json();

                if (res.ok) {
                    const blogs: BlogStatus[] = Array.isArray(data?.blogs) ? data.blogs : [];
                    setStats(prev => ({
                        ...prev,
                        totalBlogs: data?.pagination?.total ?? blogs.length,
                        publishedBlogs: blogs.filter((b) => b.status === 'published').length,
                        draftBlogs: blogs.filter((b) => b.status === 'draft').length,
                    }));
                }

                const reviewsRes = await fetch('/api/reviews');
                if (reviewsRes.ok) {
                    const reviewsData = await reviewsRes.json();
                    setStats(prev => ({
                        ...prev,
                        totalReviews: Array.isArray(reviewsData) ? reviewsData.length : 0,
                    }));
                }

                const teamRes = await fetch('/api/team?includeInactive=1');
                if (teamRes.ok) {
                    const teamData = await teamRes.json();
                    setStats(prev => ({
                        ...prev,
                        totalTeamMembers: Array.isArray(teamData) ? teamData.length : 0,
                    }));
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total Posts</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalBlogs}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Published</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.publishedBlogs}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Drafts</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.draftBlogs}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-teal-100 text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total Reviews</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalReviews}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-cyan-100 text-cyan-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5.8-3.6M17 20H7m10 0v-2c0-.7-.1-1.4-.3-2M7 20H2v-2a4 4 0 015.8-3.6M7 20v-2c0-.7.1-1.4.3-2m0 0a5 5 0 019.4 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Team Members</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalTeamMembers}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <Link
                    href="/admin/blogs/new"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors font-medium flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Post
                </Link>
                <Link
                    href="/admin/blogs"
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium flex items-center"
                >
                    Manage Posts
                </Link>
                <Link
                    href="/admin/reviews"
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-sm hover:bg-teal-700 transition-colors font-medium flex items-center"
                >
                    Manage Reviews
                </Link>
                <Link
                    href="/admin/team"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors font-medium flex items-center"
                >
                    Manage Team
                </Link>
            </div>
        </div>
    );
}
