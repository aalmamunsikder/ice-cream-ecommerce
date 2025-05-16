import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Features from '../components/Features';
import SpecialOffer from '../components/SpecialOffer';
import LocationGrid from '../components/LocationGrid';
import Testimonials from '../components/Testimonials';
import NewsletterCTA from '../components/NewsletterCTA';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <FeaturedProducts />
      <Categories />
      <SpecialOffer />
      <LocationGrid />
      <Testimonials />
      <NewsletterCTA />
    </div>
  );
};

export default Home;