import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { authenticate } from '@/middleware/auth';
import { generateSlug, calculateReadingTime, truncateText, stripHtml } from '@/lib/utils';
import { CreateBlogInput } from '@/types/blog';

/**
 * GET - Fetch all blog posts
 * Query params: page, limit, status, tag, search
 */
export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        // Parse query params
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const status = searchParams.get('status');
        const tag = searchParams.get('tag');
        const search = searchParams.get('search');

        // Build query
        const query: any = {};

        // Filter by status (default to published for public view if not specified? 
        // Usually we want public to only see published, but admin might want to see drafts.
        // Let's make it explicit via query param or default to published)
        if (status) {
            query.status = status;
        } else {
            // Default behavior: if no status specified, maybe return all? 
            // Or safer: return only published unless user asks?
            // Let's decide: if admin is authenticated, they can see drafts. 
            // But for this simple route, let's just use the query param.
            // If no status provided, we assume we want 'published'
            query.status = 'published';
        }

        // Filter by tag
        if (tag) {
            query.tags = tag;
        }

        // Search functionality (simple case-insensitive regex on title/content)
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ];
        }

        const skip = (page - 1) * limit;

        const [blogs, total] = await Promise.all([
            Blog.find(query)
                .sort({ createdAt: -1 }) // Newest first
                .skip(skip)
                .limit(limit)
                .populate('author', 'name email') // Populate author details
                .lean(),
            Blog.countDocuments(query),
        ]);

        return NextResponse.json({
            blogs,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error: any) {
        console.error('Fetch blogs error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * POST - Create a new blog post
 * Protected: Admin only
 */
export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        // Authenticate user
        const user = authenticate(request);
        if (!user) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body: CreateBlogInput = await request.json();
        const { title, content, coverImage, status, tags, excerpt } = body;

        if (!title || !content) {
            return NextResponse.json(
                { message: 'Title and content are required' },
                { status: 400 }
            );
        }

        // Generate slug
        let slug = generateSlug(title);

        // Ensure unique slug
        let slugExists = await Blog.findOne({ slug });
        if (slugExists) {
            // Append random string to make unique
            slug = `${slug}-${Math.random().toString(36).substring(2, 7)}`;
        }

        // Calculate reading time
        const readingTime = calculateReadingTime(stripHtml(content));

        // Create blog
        const newBlog = await Blog.create({
            title,
            slug,
            content,
            excerpt: excerpt || truncateText(stripHtml(content), 150),
            coverImage,
            author: user.userId,
            status: status || 'draft',
            tags: tags || [],
            readingTime,
        });

        return NextResponse.json(
            { message: 'Blog created successfully', blog: newBlog },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Create blog error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
