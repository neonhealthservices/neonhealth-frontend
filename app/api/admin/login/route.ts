import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { comparePassword, generateToken } from '@/lib/auth';
import { LoginInput } from '@/types/blog';

/**
 * Admin Login Endpoint
 * POST /api/admin/login
 */
export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const body: LoginInput = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find admin by email
        // We need to select the password explicitly since we excluded it in toJSON
        const admin = await Admin.findOne({ email: email.toLowerCase() });

        if (!admin) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await comparePassword(password, admin.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = generateToken({
            userId: admin._id.toString(),
            email: admin.email,
            role: admin.role,
        });

        return NextResponse.json(
            {
                message: 'Login successful',
                token,
                user: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                },
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
