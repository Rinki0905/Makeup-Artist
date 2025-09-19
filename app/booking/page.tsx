'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { artists, categories } from '@/data/mockData';
import { useState, FormEvent, Suspense, useEffect } from 'react';
import { useBookings, Booking } from '@/hooks/useBookings';
import { v4 as uuidv4 } from 'uuid';

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const artistId = searchParams.get('artistId');
  const categoryId = searchParams.get('categoryId');

  const artist = artists.find(a => a.id === artistId);
  const category = categories.find(c => c.id === categoryId);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [dateTime, setDateTime] = useState('');
  
  const { addBooking, isArtistBookedOnDay } = useBookings(); 
  const [dayConflict, setDayConflict] = useState(false); 

  useEffect(() => {
    if (dateTime && artist) {
      const selectedDate = new Date(dateTime)
      const conflict = isArtistBookedOnDay(artist.id, selectedDate);
      setDayConflict(conflict);
    }
  }, [dateTime, artist, isArtistBookedOnDay]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!artist || !category || dayConflict) { 
      return; 
    }

    const newBooking: Booking = {
      id: uuidv4(),
      userName: name,
      contact: contact,
      dateTime: dateTime,
      artist: artist,
      category: category,
    };

    addBooking(newBooking);

    const queryParams = new URLSearchParams({
      name: name,
      contact: contact,
      dateTime: dateTime,
      artistName: artist.name,
      categoryName: category.name,
    }).toString();

    router.push(`/confirmation?${queryParams}`);
  };

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
          <input 
            type="datetime-local" 
            id="datetime" 
            value={dateTime} 
            onChange={(e) => setDateTime(e.target.value)} 
            required 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" 
          />
          
          {dayConflict && (
            <p className="text-red-600 text-sm mt-2 font-semibold">
              This artist is already booked for this day. Please choose another date.
            </p>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={dayConflict} // Check for dayConflict
          className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
export default function BookingPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading Booking Form...</div>}>
      <div className="bg-pink-50 min-h-screen">
         <BookingForm />
      </div>
    </Suspense>
  );
}