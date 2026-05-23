'use client';

import { useState } from 'react';
import ImageKitUpload from '@/components/admin/ImageKitUpload';
import { TeamMemberData } from '@/types/team';

type TeamMemberFormProps = {
  initialData?: Partial<TeamMemberData>;
  isSubmitting: boolean;
  onSubmit: (data: TeamMemberData) => Promise<void>;
};

export default function TeamMemberForm({ initialData, isSubmitting, onSubmit }: TeamMemberFormProps) {
  const [formData, setFormData] = useState<TeamMemberData>({
    name: initialData?.name || '',
    role: initialData?.role || '',
    fullBio: initialData?.fullBio || '',
    image: initialData?.image || '',
    imageAlt: initialData?.imageAlt || '',
    profileUrl: initialData?.profileUrl || '',
    order: initialData?.order ?? 0,
    isActive: initialData?.isActive ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <input
            required
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <ImageKitUpload
          label="Team Member Image"
          currentImage={formData.image}
          onSuccess={(url: string) => setFormData((prev) => ({ ...prev, image: url }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image Alt Text</label>
        <input
          required
          type="text"
          value={formData.imageAlt}
          onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Full Bio (optional)</label>
        <textarea
          rows={5}
          value={formData.fullBio}
          onChange={(e) => setFormData({ ...formData, fullBio: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile URL (optional)</label>
          <input
            type="url"
            value={formData.profileUrl}
            onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
            placeholder="https://..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Display Order</label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1a7f7a] focus:border-[#1a7f7a] sm:text-sm"
          />
        </div>
      </div>

      <label className="inline-flex items-center gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={formData.isActive}
          onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
          className="h-4 w-4 rounded border-gray-300 text-[#1a7f7a] focus:ring-[#1a7f7a]"
        />
        Show this team member on the site
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center py-3 px-6 text-sm font-medium rounded-md text-white bg-[#1a7f7a] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a7f7a] disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Team Member'}
        </button>
      </div>
    </form>
  );
}
