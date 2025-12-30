import mongoose, { Schema, Model } from 'mongoose';
import { IBlog } from '@/types/blog';

const BlogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            maxlength: [200, 'Title cannot exceed 200 characters'],
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
        },
        excerpt: {
            type: String,
            required: [true, 'Excerpt is required'],
            maxlength: [500, 'Excerpt cannot exceed 500 characters'],
        },
        coverImage: {
            type: String,
            default: '',
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Admin',
            required: true,
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft',
        },
        tags: {
            type: [String],
            default: [],
        },
        readingTime: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// Index for better query performance
BlogSchema.index({ slug: 1 });
BlogSchema.index({ status: 1, createdAt: -1 });
BlogSchema.index({ tags: 1 });

const Blog: Model<IBlog> =
    mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
