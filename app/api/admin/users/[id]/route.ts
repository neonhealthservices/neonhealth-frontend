import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { authenticate } from '@/middleware/auth';

/**
 * DELETE - Remove an admin
 * Protected: Super Admin only
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const user = authenticate(request);

        if (!user || user.role !== 'super-admin') {
            return NextResponse.json(
                { message: 'Forbidden' },
                { status: 403 }
            );
        }

        const { id } = await params;

        // Prevent self-deletion
        if (id === user.userId) {
            return NextResponse.json(
                { message: 'Cannot delete your own account' },
                { status: 400 }
            );
        }

        const deletedAdmin = await Admin.findByIdAndDelete(id);

        if (!deletedAdmin) {
            return NextResponse.json(
                { message: 'Admin not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'Admin deleted successfully'
        });

    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
