'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { TeamMemberData } from '@/types/team';

export default function NewTeamMemberPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: TeamMemberData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to create team member');
      }

      router.push('/admin/team');
    } catch (error) {
      console.error('Error creating team member:', error);
      alert('Failed to create team member');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/team" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add Team Member</h1>
      </div>

      <TeamMemberForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}
