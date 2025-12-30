'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface AdminUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

export default function AdminManagementPage() {
    const router = useRouter();
    const [admins, setAdmins] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Form State
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'admin' // default
    });

    useEffect(() => {
        checkAccessAndFetch();
    }, []);

    async function checkAccessAndFetch() {
        // Check local role first
        const storedUser = localStorage.getItem('adminUser');
        if (!storedUser) {
            router.push('/admin/login');
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);

        if (parsedUser.role !== 'super-admin') {
            router.push('/admin/dashboard');
            return;
        }

        await fetchAdmins();
    }

    async function fetchAdmins() {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch('/api/admin/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (res.ok) {
                setAdmins(data.admins);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to load admins');
        } finally {
            setLoading(false);
        }
    }

    async function handleCreate(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to create admin');
            }

            setSuccess('Admin created successfully');
            setFormData({ name: '', email: '', password: '', role: 'admin' });
            setIsCreating(false);
            fetchAdmins(); // Refresh list

        } catch (err: any) {
            setError(err.message);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm('Are you sure you want to delete this admin?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`/api/admin/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                setAdmins(prev => prev.filter(a => a._id !== id));
                setSuccess('Admin deleted');
            } else {
                const data = await res.json();
                alert(data.message);
            }
        } catch (err) {
            alert('Failed to delete');
        }
    }

    if (loading) return <div className="p-10 flex justify-center"><LoadingSpinner /></div>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Manage Admins</h1>
                    <p className="text-gray-500">Only super-admins can access this page</p>
                </div>
                <button
                    onClick={() => setIsCreating(!isCreating)}
                    className="bg-[#1a7f7a] text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                >
                    {isCreating ? 'Cancel' : 'Add New Admin'}
                </button>
            </div>

            {error && <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">{error}</div>}
            {success && <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">{success}</div>}

            {isCreating && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 max-w-2xl">
                    <h2 className="text-lg font-bold mb-4">Create New Admin</h2>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#1a7f7a]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#1a7f7a]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#1a7f7a]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    value={formData.role}
                                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#1a7f7a]"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="super-admin">Super Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button type="submit" className="bg-[#1a7f7a] text-white px-6 py-2 rounded-lg hover:bg-teal-700">Create Admin</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#ECF9F7] text-gray-700">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Name</th>
                            <th className="px-6 py-4 font-semibold">Email</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">Created</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {admins.map((admin) => (
                            <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{admin.name}</td>
                                <td className="px-6 py-4 text-gray-600">{admin.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${admin.role === 'super-admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                        }`}>
                                        {admin.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-sm">
                                    {new Date(admin.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {admin._id !== currentUser?.user?.id && admin._id !== currentUser?.id && (
                                        <button
                                            onClick={() => handleDelete(admin._id)}
                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {admins.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    No admins found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
