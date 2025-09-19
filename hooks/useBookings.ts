import { useState, useEffect } from 'react';
import { Artist, Category } from '@/types';

// Extend our types to include booking info
export interface Booking {
  id: string;
  userName: string;
  contact: string;
  dateTime: string;
  artist: Artist;
  category: Category;
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // This code runs only on the client, after the component mounts
    const storedBookings = localStorage.getItem('glamBookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  const addBooking = (newBooking: Booking) => {
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('glamBookings', JSON.stringify(updatedBookings));
  };

  const getBookingsForArtist = (artistId: string): Booking[] => {
    const storedBookings = localStorage.getItem('glamBookings');
    if (!storedBookings) return [];
    const allBookings: Booking[] = JSON.parse(storedBookings);
    return allBookings.filter(booking => booking.artist.id === artistId);
  };
  const isArtistBookedOnDay = (artistId: string, date: Date): boolean => {
    const storedBookings = localStorage.getItem('glamBookings');
    if (!storedBookings) return false;

    const allBookings: Booking[] = JSON.parse(storedBookings);
    const artistBookings = allBookings.filter(b => b.artist.id === artistId);

    // Check if any of the artist's existing bookings fall on the same calendar day
    return artistBookings.some(booking => {
      const existingBookingDate = new Date(booking.dateTime);
      return (
        existingBookingDate.getFullYear() === date.getFullYear() &&
        existingBookingDate.getMonth() === date.getMonth() &&
        existingBookingDate.getDate() === date.getDate()
      );
    });
  };
  return { bookings, addBooking, getBookingsForArtist, isArtistBookedOnDay };
};