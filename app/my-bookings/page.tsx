'use client';

import { useBookings } from '@/hooks/useBookings';
import Link from 'next/link';

export default function MyBookingsPage() {
  const { bookings } = useBookings();

  return (
    <div className="bg-pink-50 min-h-screen">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-500">GlamBook</Link>
          <h1 className="text-2xl font-semibold text-gray-800">My Bookings</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-pink-600">{booking.category.name}</h2>
                    <p className="text-gray-700">with {booking.artist.name}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:text-right">
                    <p className="font-semibold text-gray-800">
                      {new Date(booking.dateTime).toLocaleDateString('en-US', { dateStyle: 'full' })}
                    </p>
                    <p className="text-gray-600">
                      {new Date(booking.dateTime).toLocaleTimeString('en-US', { timeStyle: 'short' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">You have no bookings yet.</p>
            <Link href="/" className="mt-4 inline-block text-pink-500 hover:underline">Book an appointment</Link>
          </div>
        )}
      </main>
    </div>
  );
}