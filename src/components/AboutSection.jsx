// AboutSection.jsx
import React from 'react';
import './App.css'
import aboutImage from '../assets/images/aboutImage.png'
import { NavLink } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>ABOUT</h2>
          <p>
            At VSM INTERNATIONAL, we are not just exporters; we are dedicated farmers committed to bringing the best of India’s agricultural products to the world. 
            As a trusted export partner, we specialize in high-quality dry fruits, vegetables, fruits, spices, and grains, sourced directly from farms across India. 
            Our mission is to provide a seamless and reliable export experience, building strong connections between our farms and global markets.
          </p>
          <p>
            With deep roots in farming, we understand the value of quality and consistency. We pride ourselves on our strong network with local farmers and our 
            commitment to sustainability and ethical practices in agriculture. Join us on a journey to bring the finest agricultural products from India to your doorstep.
          </p>
          <NavLink to="/about" className="cta-button">Know More</NavLink>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Farmer in the field or Export Scene" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
