import { categories } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';

interface SubcategoryPageProps {
  params: {
    categoryId: string;
  };
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { categoryId } = params;
  const category = categories.find(c => c.id === categoryId);

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
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-pink-500">GlamBook</Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {category.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.id}
              href={`/artists/${sub.id}`} 
              className="group block rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={sub.imageUrl}
                  alt={sub.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  {sub.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">View artists available for this service.</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}