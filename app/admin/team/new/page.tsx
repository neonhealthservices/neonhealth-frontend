'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { TeamMemberData } from '@/types/team';

export default function NewTeamMemberPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nextOrder, setNextOrder] = useState<number | null>(null);

  useEffect(() => {
    async function fetchNextOrder() {
      try {
        const res = await fetch('/api/team?includeInactive=1');
        if (res.ok) {
          const members: TeamMemberData[] = await res.json();
          if (members && members.length > 0) {
            const max = Math.max(...members.map(m => m.order || 0));
            setNextOrder(max + 1);
          } else {
            setNextOrder(1);
          }
        } else {
          setNextOrder(1);
        }
      } catch (error) {
        setNextOrder(1);
      }
    }
    fetchNextOrder();
  }, []);

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

      {nextOrder !== null ? (
        <TeamMemberForm onSubmit={handleSubmit} isSubmitting={isSubmitting} initialData={{ order: nextOrder }} />
      ) : (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a7f7a]"></div>
        </div>
      )}
    </div>
  );
}
