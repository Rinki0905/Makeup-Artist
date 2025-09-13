import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-2xl font-bold text-pink-500">GlamBook</h2>
          <p className="text-sm text-gray-500">Your Beauty, Our Passion.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link href="#categories" className="hover:text-pink-500 transition-colors">Categories</Link>
          <Link href="#" className="hover:text-pink-500 transition-colors">About</Link>
          <Link href="#" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}