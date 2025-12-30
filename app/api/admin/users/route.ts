import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { authenticate } from '@/middleware/auth';
import { hashPassword } from '@/lib/auth';

/**
 * GET - List all admins
 * Protected: Super Admin only
 */
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const user = authenticate(request);

        if (!user || user.role !== 'super-admin') {
            return NextResponse.json(
                { message: 'Forbidden' },
                { status: 403 }
            );
        }

        // Fetch all admins, sort by newest
        const admins = await Admin.find({}).sort({ createdAt: -1 }).select('-password');

        return NextResponse.json({ admins });
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * POST - Create a new admin
 * Protected: Super Admin only
 */
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const user = authenticate(request);

        if (!user || user.role !== 'super-admin') {
            return NextResponse.json(
                { message: 'Forbidden' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const { name, email, password, role } = body;

        // Validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if exists
        const existing = await Admin.findOne({ email });
        if (existing) {
            return NextResponse.json(
                { message: 'Email already exists' },
                { status: 409 }
            );
        }

        const hashedPassword = await hashPassword(password);
        const newAdmin = await Admin.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'admin' // Default to regular admin
        });

        // Remove password from response
        const adminResponse = {
            id: newAdmin._id,
            name: newAdmin.name,
            email: newAdmin.email,
            role: newAdmin.role,
            createdAt: newAdmin.createdAt
        };

        return NextResponse.json({
            message: 'Admin created successfully',
            admin: adminResponse
        });

    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
