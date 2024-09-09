// ProductsSection.jsx
import React, { useState } from 'react';
import './App.css'
import onion from '../assets/products/onion2.jpg'
import dry_fruits from '../assets/products/dry-fruits.jpg'
import lemon from '../assets/products/lemon.jpg'
import Pomegranate from '../assets/products/Pomegranate.jpg'
import ginger from '../assets/products/ginger.jpg'

// Sample data
const productData = [
  { id: 1, category: 'Dry Fruits', image:  dry_fruits},
  { id: 2, category: 'Vegetables', image: onion },
  { id: 3, category: 'Vegetables', image: lemon },
  { id: 4, category: 'Spices', image: ginger },
  { id: 5, category: 'Fruits', image: Pomegranate },
];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <section className="products-section">
     
      <h2>PRODUCTS</h2>
        <hr />
      <div className="products-nav">
        <button onClick={() => setSelectedCategory('All')} className='product-btn'>All</button>
        <button onClick={() => setSelectedCategory('Dry Fruits')} className='product-btn'>Dry Fruits</button>
        <button onClick={() => setSelectedCategory('Fruits')} className='product-btn'>Fruits</button>
        <button onClick={() => setSelectedCategory('Vegetables')} className='product-btn'>Vegetables</button>
        <button onClick={() => setSelectedCategory('Spices')} className='product-btn'>Spices</button>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.category} />
          </div>
        ))}
      </div>
     
        
    </section>
  );
};

export default ProductsSection;
