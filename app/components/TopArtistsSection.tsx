import { artists, categories } from '@/data/mockData';
import Image from 'next/image';

export default function TopArtistsSection() {
  // Get the top 4 highest-rated artists
  const topArtists = [...artists]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Top Artists</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our platform features highly skilled and celebrated makeup artists, each bringing a unique touch of glamour and professionalism.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topArtists.map((artist) => {
            // This line finds the category name for each artist and provides a fallback
            const categoryName = categories.find(c => c.id === artist.categoryId)?.name.replace('Makeover Services', '').trim() || 'Various Styles';

            return (
              <div key={artist.id} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={artist.profilePicture}
                  alt={artist.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-pink-200"
                />
                <h3 className="text-xl font-bold text-gray-900">{artist.name}</h3>
                <p className="text-yellow-500 my-1">
                  {'⭐'.repeat(Math.floor(artist.rating))} <span className="text-gray-600 ml-1">{artist.rating.toFixed(1)}</span>
                </p>
                <p className="text-sm text-pink-600 font-semibold mt-2">
                  Specializing in {categoryName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}