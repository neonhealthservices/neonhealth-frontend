'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BlogCard from '@/components/blog/BlogCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { IBlog } from '@/types/blog';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';

function BlogListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    pages: 1,
    total: 0
  });

  const currentPage = Number(searchParams.get('page')) || 1;
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, searchTerm]);

  async function fetchBlogs() {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: '9',
        status: 'published'
      });

      if (searchTerm) {
        queryParams.append('search', searchTerm);
      }

      const res = await fetch(`/api/blogs?${queryParams.toString()}`);
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.blogs);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;

    router.push(`/blog?search=${encodeURIComponent(search)}&page=1`);
  }

  function handlePageChange(newPage: number) {
    if (newPage < 1 || newPage > pagination.pages) return;

    const query = searchTerm
      ? `?search=${encodeURIComponent(searchTerm)}&page=${newPage}`
      : `?page=${newPage}`;

    router.push(`/blog${query}`);
  }

  return (
    <div className="bg-gradient-to-b from-[#ECF9F7] to-white min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 pt-16 lg:pt-10">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-[#1a7f7a] text-xs font-bold tracking-wider uppercase mb-4">
            Health & Wellness
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest News & <span className="text-[#1a7f7a]">Insights</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay updated with expert medical advice, hospital news, and health tips specifically curated for our community.
          </p>
        </div>

        <div className="mb-12 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              name="search"
              defaultValue={searchTerm}
              placeholder="Search articles..."
              className="w-full px-6 py-4 border-2 border-gray-100 bg-white rounded-full focus:outline-none focus:border-[#1a7f7a] focus:ring-0 shadow-sm transition-all text-lg placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-2.5 bg-[#1a7f7a] text-white p-2 rounded-full hover:bg-teal-700 transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner size="lg" color="teal" />
          </div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <BlogCard key={blog._id} blog={blog} index={index} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="mt-16 flex justify-center gap-2">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className={`px-5 py-2.5 rounded-full border font-medium transition-colors ${pagination.page === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-transparent'
                    : 'bg-white text-gray-700 hover:bg-[#ECF9F7] hover:text-[#1a7f7a] border-gray-200'
                    }`}
                >
                  Previous
                </button>
                <span className="px-5 py-2.5 flex items-center text-gray-700 font-medium bg-white rounded-full border border-gray-200">
                  Page {pagination.page} of {pagination.pages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.pages}
                  className={`px-5 py-2.5 rounded-full border font-medium transition-colors ${pagination.page === pagination.pages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-transparent'
                    : 'bg-white text-gray-700 hover:bg-[#ECF9F7] hover:text-[#1a7f7a] border-gray-200'
                    }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No articles found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any articles matching your search.</p>
            {searchTerm && (
              <button
                onClick={() => router.push('/blog')}
                className="px-6 py-2 bg-[#1a7f7a] text-white rounded-full hover:bg-teal-700 transition-colors font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <BlogListContent />
      </Suspense>
      <Footer />
    </>
  );
}