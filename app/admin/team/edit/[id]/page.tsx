'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { TeamMemberData } from '@/types/team';

export default function EditTeamMemberPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [member, setMember] = useState<TeamMemberData | null>(null);

  useEffect(() => {
    if (!params.id) return;

    const loadTeamMember = async () => {
      try {
        const res = await fetch(`/api/team/${params.id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || 'Failed to fetch team member');
        }

        setMember({
          _id: data._id,
          name: data.name,
          role: data.role,
          fullBio: data.fullBio,
          image: data.image,
          imageAlt: data.imageAlt,
          profileUrl: data.profileUrl || '',
          order: data.order,
          isActive: data.isActive,
        });
      } catch (error) {
        console.error('Error fetching team member:', error);
        router.push('/admin/team');
      } finally {
        setLoading(false);
      }
    };

    loadTeamMember();
  }, [params.id, router]);

  const handleSubmit = async (data: TeamMemberData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/team/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to update team member');
      }

      router.push('/admin/team');
    } catch (error) {
      console.error('Error updating team member:', error);
      alert('Failed to update team member');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!member) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/team" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Team Member</h1>
      </div>

      <TeamMemberForm initialData={member} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}
