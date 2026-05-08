'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Save } from 'lucide-react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function EditReview() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    title: '',
    content: '',
    service: '',
    rating: 5,
  });

  useEffect(() => {
    if (params.id) {
      fetchReview();
    }
  }, [params.id]);

  const fetchReview = async () => {
    try {
      const res = await fetch(`/api/reviews`);
      const data = await res.json();
      if (res.ok) {
        const review = data.find((r: any) => r._id === params.id);
        if (review) {
          setFormData({
            patientName: review.patientName,
            title: review.title,
            content: review.content,
            service: review.service,
            rating: review.rating,
          });
        } else {
          router.push('/admin/reviews');
        }
      }
    } catch (error) {
      console.error('Error fetching review:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/reviews/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/reviews');
      } else {
        alert('Failed to update review');
      }
    } catch (error) {
      console.error('Error updating review:', error);
      alert('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/reviews"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Review</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Patient Name</label>
          <input
            required
            type="text"
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            placeholder="e.g. John Doe"
            value={formData.patientName}
            onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Rating (1-5)</label>
          <select
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{n} Stars</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Review Content</label>
          <textarea
            required
            rows={5}
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            placeholder="Share the patient's experience..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            disabled={saving}
            type="submit"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all flex items-center disabled:opacity-50"
          >
            {saving ? 'Updating...' : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Update Review
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
