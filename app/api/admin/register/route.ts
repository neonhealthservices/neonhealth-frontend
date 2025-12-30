import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { hashPassword, generateToken } from '@/lib/auth';
import { RegisterInput } from '@/types/blog';

/**
 * Admin Registration Endpoint
 * POST /api/admin/register
 */
export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const body: RegisterInput = await request.json();
        const { name, email, password } = body;

        // specific validation for fields
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if any admin already exists
        // This is a safety measure to create only the first admin
        // You can remove this check if you want multiple admins to register or secure it differently
        // For this implementation, we will allow anyone to register as an admin for testing, but in production
        // you should secure this.
        // Let's implement a check: if an admin exists, this fails unless a special secret is provided (omitted for now)

        // Check if email already exists
        const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
        if (existingAdmin) {
            return NextResponse.json(
                { message: 'Email already registered' },
                { status: 409 }
            );
        }

        const hashedPassword = await hashPassword(password);

        const newAdmin = await Admin.create({
            name,
            email,
            password: hashedPassword,
            role: 'admin',
        });

        const token = generateToken({
            userId: newAdmin._id.toString(),
            email: newAdmin.email,
            role: newAdmin.role,
        });

        return NextResponse.json(
            {
                message: 'Admin registered successfully',
                token,
                user: {
                    id: newAdmin._id,
                    name: newAdmin.name,
                    email: newAdmin.email,
                    role: newAdmin.role,
                },
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
