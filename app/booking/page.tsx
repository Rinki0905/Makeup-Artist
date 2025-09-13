'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { artists, categories } from '@/data/mockData';
import { useState, FormEvent, Suspense } from 'react';

// We create the form as a separate component to wrap it in Suspense easily
function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get artist and category IDs from the URL query parameters
  const artistId = searchParams.get('artistId');
  const categoryId = searchParams.get('categoryId');

  // Find the selected artist and category from our mock data
  const artist = artists.find(a => a.id === artistId);
  const category = categories.find(c => c.id === categoryId);

  // State for the form fields
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const queryParams = new URLSearchParams({
    name: name,
    contact: contact,
    dateTime: dateTime,
    artistName: artist?.name || 'N/A',
    categoryName: category?.name || 'N/A',
  }).toString();

  router.push(`/confirmation?${queryParams}`);
};

  // Handle cases where the URL is invalid
  if (!artist || !category) {
    return <div className="text-center py-10 text-red-500">Invalid booking link. Please try again.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-lg my-10 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Selected Artist</label>
          <input type="text" readOnly value={artist.name} className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Selected Service</label>
          <input type="text" readOnly value={category.name} className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed" />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>
        <div>
          <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">Email / Phone</label>
          <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="your@email.com or 123-456-7890"/>
        </div>
        <div>
          <label htmlFor="datetime" className="block text-gray-700 font-semibold mb-2">Preferred Date & Time</label>
          <input type="datetime-local" id="datetime" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>
        <button type="submit" className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors transform hover:scale-105">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

// Main page component that wraps the form in Suspense
export default function BookingPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading Booking Form...</div>}>
      <div className="bg-pink-50 min-h-screen">
         <BookingForm />
      </div>
    </Suspense>
  );
}