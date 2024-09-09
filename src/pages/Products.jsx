import React, { useEffect, useState } from 'react';
import Product from '../components/Product.jsx';
import productData from '../data/products.js';
import './webpages.css';

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  // Function to get the correct class for a button based on the selected category
  const getButtonClass = (category) => {
    return selectedCategory === category ? 'active-button' : '';
  };

  return (
    <div className="main-container">
      <div className="products-container">
        <h1>Products</h1>
        <hr className='horizontal-line' />
        <div className="navigation-menus">
          <button
            className={getButtonClass('All')}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button
            className={getButtonClass('Dry Fruits')}
            onClick={() => setSelectedCategory('Dry Fruits')}
          >
            Dry Fruits
          </button>
          <button
            className={getButtonClass('Fruits')}
            onClick={() => setSelectedCategory('Fruits')}
          >
            Fruits
          </button>
          <button
            className={getButtonClass('Vegetables')}
            onClick={() => setSelectedCategory('Vegetables')}
          >
            Vegetables
          </button>
          <button
            className={getButtonClass('Spices')}
            onClick={() => setSelectedCategory('Spices')}
          >
            Spices
          </button>
        </div>
        <div className="products-info">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              specifications={product.specifications}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
