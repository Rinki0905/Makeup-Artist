import { artists, categories } from '@/data/mockData';
import ArtistCard from '@/app/components/ArtistCard';
import Link from 'next/link';

interface ArtistListingPageProps {
  params: {
    categoryId: string;
  };
}

// Add the 'async' keyword here
export default async function ArtistListingPage({ params }: ArtistListingPageProps) {
  const { categoryId } = params;
  
  const category = categories.find(c => c.id === categoryId);
  
  const filteredArtists = artists.filter(a => a.categoryId === categoryId);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link href="/" className="text-pink-500 hover:underline mt-4 inline-block">Go back to Home</Link>
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
          Artists for <span className="text-pink-500">{category.name}</span>
        </h1>
        
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} categoryId={categoryId} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No artists found for this category yet.</p>
        )}
      </main>
    </div>
  );
}