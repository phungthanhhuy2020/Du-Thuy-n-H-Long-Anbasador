
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PackagesSection from './components/PackagesSection';
import ItinerarySection from './components/ItinerarySection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingFormSection from './components/PricingFormSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-navy">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PackagesSection />
        <ItinerarySection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <PricingFormSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
