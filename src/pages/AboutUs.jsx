import React, { useEffect } from 'react';
import './webpages.css'; // Make sure to create and style this CSS file
import { NavLink } from 'react-router-dom';

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  return (
    <div className="main-container">
      <div className="about-us-modern">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Welcome to VSM INTERNATIONAL, a startup dedicated to connecting local farmers with global markets.
          Our focus is on delivering high-quality dry fruits, vegetables, fruits, spices, and grains worldwide.
        </p>
      </section>
      <hr className='horizontal-line'/>
      <section className="details">
        <div className="detail-item">
          <h2>Our Mission</h2>
          <p>
            To offer premium agro products sourced directly from farmers, ensuring quality and sustainability.
          </p>
        </div>
        <div className="detail-item">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> Transparent and honest operations.</li>
            <li><strong>Sustainability:</strong> Support for sustainable practices.</li>
            <li><strong>Customer Focus:</strong> Commitment to customer satisfaction.</li>
          </ul>
        </div>
        <div className="detail-item">
          <h2>Our Vision</h2>
          <p>
            Founded by Vishal Mahale, our startup aims to bridge the gap between local produce and global markets with a focus on quality and growth.
          </p>
        </div>
      </section>

      <section className="cta">
        <p>
          Join us on our journey to revolutionize agro exports. We’re excited about the future and look forward to making a difference.
        </p>
        <NavLink to="/contact" className="btn">Contact Us</NavLink>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
