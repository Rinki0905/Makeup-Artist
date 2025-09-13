export default function HeroSection() {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Find & Book Your Perfect Makeup Artist
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Discover top-rated makeup professionals for any occasion, from weddings to photoshoots.
        </p>
        <button className="mt-8 px-8 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-transform duration-300 transform hover:scale-105">
          Explore Artists
        </button>
      </div>
    </div>
  );
}