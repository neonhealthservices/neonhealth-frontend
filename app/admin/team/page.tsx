'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { TeamMemberData } from '@/types/team';

export default function ManageTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch('/api/team?includeInactive=1');
      const data = await res.json();
      if (res.ok) {
        setTeamMembers(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTeamMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const res = await fetch(`/api/team/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setTeamMembers((prev) => prev.filter((member) => member._id !== id));
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Manage Team</h1>
        <Link
          href="/admin/team/new"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Team Member
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Role</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Order</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teamMembers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    No team members found. Click &quot;Add Team Member&quot; to create one.
                  </td>
                </tr>
              ) : (
                teamMembers.map((member) => (
                  <tr key={member._id || member.name} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.order}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          member.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {member.isActive ? 'Active' : 'Hidden'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <div className="flex justify-end gap-3">
                        <Link
                          href={`/admin/team/edit/${member._id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => member._id && deleteTeamMember(member._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
