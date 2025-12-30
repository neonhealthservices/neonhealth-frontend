import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { authenticate } from '@/middleware/auth';
import { generateSlug, calculateReadingTime, stripHtml, truncateText } from '@/lib/utils';
import { UpdateBlogInput } from '@/types/blog';

/**
 * GET - Fetch single blog by ID or Slug
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        let blog;

        // Check if id is a valid ObjectId (for ID lookup)
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            blog = await Blog.findById(id).populate('author', 'name email');
        }

        // If not found by ID, try finding by slug
        if (!blog) {
            blog = await Blog.findOne({ slug: id }).populate('author', 'name email');
        }

        if (!blog) {
            return NextResponse.json(
                { message: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ blog });
    } catch (error: any) {
        console.error('Fetch blog error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * PUT - Update a blog post
 * Protected: Admin only
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();

        // Authenticate
        const user = authenticate(request);
        if (!user) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = await params;
        const body: UpdateBlogInput = await request.json();

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { message: 'Blog not found' },
                { status: 404 }
            );
        }

        // Update fields
        if (body.title) {
            blog.title = body.title;
            // Optionally update slug if title changes - but usually better to keep slug stable for SEO
            // unless explicitly requested. Let's keep slug stable for now unless we add logic to change it.
        }

        if (body.content) {
            blog.content = body.content;
            blog.readingTime = calculateReadingTime(stripHtml(body.content));

            // Update excerpt if explicitly provided OR if it was auto-generated before?
            // Better to only update excerpt if user provides it.
        }

        if (body.excerpt) blog.excerpt = body.excerpt;
        if (body.coverImage) blog.coverImage = body.coverImage;
        if (body.status) blog.status = body.status;
        if (body.tags) blog.tags = body.tags;

        blog.updatedAt = new Date();

        await blog.save();

        return NextResponse.json({
            message: 'Blog updated successfully',
            blog,
        });
    } catch (error: any) {
        console.error('Update blog error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * DELETE - Delete a blog post
 * Protected: Admin only
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();

        // Authenticate
        const user = authenticate(request);
        if (!user) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        if (user.role !== 'super-admin') {
            return NextResponse.json(
                { message: 'Forbidden: Only Super Admins can delete blogs' },
                { status: 403 }
            );
        }

        const { id } = await params;

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.json(
                { message: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'Blog deleted successfully',
        });
    } catch (error: any) {
        console.error('Delete blog error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
