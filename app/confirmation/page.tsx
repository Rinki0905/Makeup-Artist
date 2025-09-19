'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function ConfirmationDetails() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const contact = searchParams.get('contact');
  const dateTime = searchParams.get('dateTime');
  const artistName = searchParams.get('artistName');
  const categoryName = searchParams.get('categoryName');
  
  // Format the date for better readability
  const formattedDate = dateTime ? new Date(dateTime).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }) : 'Not specified';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg text-center border border-pink-100">
        <div className="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Booking Confirmed!</h1>
        <p className="text-gray-600 mt-2">Thank you, {name}! Your appointment is set.</p>
        
        <div className="text-left mt-8 p-4 bg-pink-50 rounded-lg border border-pink-200 space-y-2">
          <h2 className="font-bold text-lg mb-2 text-pink-600">Booking Details:</h2>
          <p><strong>Artist:</strong> {artistName}</p>
          <p><strong>Service:</strong> {categoryName}</p>
          <p><strong>Date & Time:</strong> {formattedDate}</p>
          <p><strong>Contact Info:</strong> {contact}</p>
        </div>

        <Link href="/" className="inline-block mt-8 bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div className="text-center p-10">Loading confirmation...</div>}>
            <ConfirmationDetails />
        </Suspense>
    )
}