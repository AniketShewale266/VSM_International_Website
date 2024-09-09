// Footer.jsx
import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Us */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            VSM INTERNATIONAL is a trusted export partner, trading and exporting a wide range of agro products such as dry fruits, vegetables, spices, and grains. We aim to deliver quality products worldwide.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Nashik, Maharashtra, India</p>
          <p>Phone: +91-9876543210</p>
          <p>Email: info@vsminternational.com</p>
        </div>

        {/* Column 4: Social Media Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VSM INTERNATIONAL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
