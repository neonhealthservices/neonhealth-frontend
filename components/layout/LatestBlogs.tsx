import Link from 'next/link';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import BlogCard from '@/components/blog/BlogCard';

async function getLatestBlogs() {
    try {
        await dbConnect();
        const blogs = await Blog.find({ status: 'published' })
            .sort({ createdAt: -1 })
            .limit(3)
            .populate('author', 'name')
            .lean();

        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error('Error fetching latest blogs:', error);
        return [];
    }
}

export default async function LatestBlogs() {
    const blogs = await getLatestBlogs();

    if (!blogs || blogs.length === 0) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#1a7f7a] font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Our Blog
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Latest News & <span className="text-[#1a7f7a]">Insights</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Stay informed with our latest updates, health tips, and medical advancements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogs.map((blog: any) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-8 py-3 bg-[#1a7f7a] text-white font-medium rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        View All Articles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
