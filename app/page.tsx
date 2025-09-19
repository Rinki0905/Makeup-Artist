import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import TopArtistsSection from './components/TopArtistsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
       <TopArtistsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}