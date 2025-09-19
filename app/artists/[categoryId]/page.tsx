'use client';

import { useState, useMemo, use } from 'react';
import { artists, categories } from '@/data/mockData';
import ArtistCard from '@/app/components/ArtistCard';
import Link from 'next/link';

interface ArtistListingPageProps {
  params: Promise<{ categoryId: string }>; 
}

export default function ArtistListingPage({ params }: ArtistListingPageProps) {
 
  const { categoryId: slug } = use(params);

  let parentCategory;
  let subcategory;
  for (const cat of categories) {
    const sub = cat.subcategories.find(s => s.id === slug);
    if (sub) {
      subcategory = sub;
      parentCategory = cat;
      break;
    }
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const filteredAndSortedArtists = useMemo(() => {
    if (!slug) return [];

    let artistsInSubcategory = artists.filter((a) => a.subcategoryId === slug);
    if (searchQuery) {
      artistsInSubcategory = artistsInSubcategory.filter((artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    artistsInSubcategory.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.rating - a.rating; 
    });

    return artistsInSubcategory;
  }, [slug, searchQuery, sortBy]);

  if (!subcategory || !parentCategory) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Subcategory not found</h1>
        <Link href="/" className="text-pink-500 hover:underline mt-4 inline-block">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-pink-500 hover:opacity-80 transition-opacity">
            GlamBook
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Artists for <span className="text-pink-500">{subcategory.name}</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow sticky top-[70px] z-10">
          <input
            type="text"
            placeholder="Search by artist name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="rating">Sort by Rating</option>
            <option value="price-asc">Sort by Price: Low to High</option>
            <option value="price-desc">Sort by Price: High to Low</option>
          </select>
        </div>
        
        {filteredAndSortedArtists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredAndSortedArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                categoryId={parentCategory!.id} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg pt-8">
            No artists found for this subcategory.
          </p>
        )}
      </main>
    </div>
  );
}