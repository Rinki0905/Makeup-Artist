'use client';

import { categories } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function CategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-16 bg-white px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          From timeless bridal looks to bold, editorial styles, explore our diverse range of makeup services. Each category is designed to connect you with the perfect artist for any occasion.
        </p>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hidden md:block hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 hide-scrollbar"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group block rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 snap-center min-w-[300px]"
              >
                <div className="relative h-72">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 hidden md:block hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}