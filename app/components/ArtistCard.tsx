import { Artist } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

const renderStars = (rating: number) => {
  return '⭐'.repeat(Math.floor(rating));
};

interface ArtistCardProps {
  artist: Artist;
  categoryId: string;
}

export default function ArtistCard({ artist, categoryId }: ArtistCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-pink-100 transform hover:scale-105 transition-transform duration-300">
      <Image 
        src={artist.profilePicture} 
        alt={artist.name} 
        width={300} 
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col text-center">
        <h3 className="text-xl font-bold text-gray-800">{artist.name}</h3>
        <div className="my-1">
          <span className="text-yellow-400">{renderStars(artist.rating)}</span>
          <span className="text-gray-600 ml-2">{artist.rating.toFixed(1)}</span>
        </div>
        
       <p className="text-gray-600 text-sm my-2 flex-grow italic">
  &quot;{artist.bio}&quot;
</p>

        <p className="text-lg font-semibold text-pink-500 mb-4">₹{artist.price.toLocaleString()}</p>
        
        <div className="mt-auto">
          <Link 
            href={`/booking?artistId=${artist.id}&categoryId=${categoryId}`}
            className="block w-full text-center bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}