import mongoose, { Schema, Model } from 'mongoose';
import { IAdmin } from '@/types/blog';

const AdminSchema = new Schema<IAdmin>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters'],
        },
        role: {
            type: String,
            enum: ['super-admin', 'admin'],
            default: 'admin',
        },
    },
    {
        timestamps: true,
    }
);

// Prevent password from being returned in queries by default
AdminSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete (ret as any).password;
        return ret;
    },
});

const Admin: Model<IAdmin> =
    mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;
