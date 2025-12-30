export interface IBlog {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage?: string;
    author: string | {
        _id: string;
        name: string;
        email: string;
    };
    status: 'draft' | 'published';
    tags: string[];
    readingTime?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAdmin {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'super-admin' | 'admin';
    createdAt: Date;
}

export interface CreateBlogInput {
    title: string;
    content: string;
    excerpt: string;
    coverImage?: string;
    status: 'draft' | 'published';
    tags: string[];
}

export interface UpdateBlogInput {
    title?: string;
    content?: string;
    excerpt?: string;
    coverImage?: string;
    status?: 'draft' | 'published';
    tags?: string[];
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface RegisterInput {
    name: string;
    email: string;
    password: string;
}
