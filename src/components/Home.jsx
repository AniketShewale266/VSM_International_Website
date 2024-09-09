import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
// import './App.css';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  return (
    <>
        <HeroSection />
        <AboutSection/>
        <ProductsSection/>
    </>
  )
};

export default Home;
