import React from 'react';
import './App.css'
import heroImage from '../assets/images/hero-image.png'
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>VSM INTERNATIONAL</h1>
          <h2>“Trusted Export Partner”</h2>
          <p>
            Trader and Exporter of Agro Products, including dry fruits, fruits, vegetables, spices, and grains.
            Delivering quality produce worldwide with a commitment to freshness and excellence.
          </p>
          <NavLink to='/products' className="cta-button">Explore Our Products</NavLink>
        </div>
        <div className="hero-image">
          <img
            src={heroImage} // Replace with the correct path to your transparent truck image
            alt="Truck loaded with fresh produce"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
