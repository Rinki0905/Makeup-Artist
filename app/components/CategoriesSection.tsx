'use client';

import { categories } from '@/data/mockData';
import Link from 'next/link';
import { useRef } from 'react';

export default function CategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Find your scrollLeft function
const scrollLeft = (e: React.MouseEvent) => { // Add the event parameter
  e.stopPropagation(); // Add this line
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
};

// Find your scrollRight function
const scrollRight = (e: React.MouseEvent) => { // Add the event parameter
  e.stopPropagation(); // Add this line
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
};

  return (
    <section id="categories" className="py-16 bg-white px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">Select a category to find the perfect artist for your needs.</p>

        <div className="relative">
          {/* Left Arrow */}
          <button
             onClick={(e) => scrollLeft(e)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block border border-gray-200 hover:scale-105 transition-transform"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Categories Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 hide-scrollbar px-2" // Added px-2 for slight padding near arrows
          >
            {categories.map((category) => (
              <Link href={`/artists/${category.id}`} key={category.id} className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] snap-center">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 h-64">
                  {/* Background Image Container */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${category.imageUrl}')` }}
                  >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-opacity"></div>
                  </div>

                  {/* Category Name (always visible on top of image) */}
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <span className="text-3xl font-bold text-white text-center drop-shadow-md">{category.name}</span>
                  </div>

                  {/* Subcategories (visible on hover) */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-20">
                    <p className="text-white text-lg font-semibold mb-2">Subcategories:</p>
                    {category.subcategories.map((sub) => (
                      <p key={sub.id} className="text-gray-200 text-md my-0.5">{sub.name}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => scrollRight(e)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block border border-gray-200 hover:scale-105 transition-transform"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}