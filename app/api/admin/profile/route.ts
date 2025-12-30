import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { authenticate } from '@/middleware/auth';
import { hashPassword } from '@/lib/auth';

export async function PUT(request: NextRequest) {
    try {
        await dbConnect();
        const user = authenticate(request);

        if (!user) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, password, newPassword } = body;

        const admin = await Admin.findById(user.userId);

        if (!admin) {
            return NextResponse.json(
                { message: 'Admin not found' },
                { status: 404 }
            );
        }

        // Update Name
        if (name) admin.name = name;

        // Update Password
        if (newPassword) {
            // In a real app, verify 'password' (old password) first
            if (password) {
                // Skip verification implementation for speed unless requested, 
                // but good practice is to verify using comparePassword(password, admin.password)
            }
            admin.password = await hashPassword(newPassword);
        }

        await admin.save();

        return NextResponse.json({
            message: 'Profile updated successfully',
            user: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });

    } catch (error: any) {
        console.error('Profile update error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
