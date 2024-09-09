import React from 'react';

const Product = ({ name, description, specifications = {}, image }) => {
  
  const { Type, Color, Shape, Size,Taste, Origin, Quality, Packing, Availability } = specifications;

  return (
    <div className="product">
      <div className="products-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="product-specification">
        <div className="product-img">
          <img src={image} alt={`${name} Image`} />
        </div>
        <div className="product-desc">
          <h3>Specification</h3>
          <p>
            <strong>Type</strong> - {Type || 'N/A'} <br />
            <strong>Color</strong> - {Color || 'N/A'} <br />
            <strong>Shape</strong> - {Shape || 'N/A'} <br />
            <strong>Size</strong> - {Size || 'N/A'} <br />
            <strong>Taste</strong> - {Taste || 'N/A'} <br />
            <strong>Origin</strong> - {Origin || 'N/A'} <br />
            <strong>Quality</strong> - {Quality || 'N/A'} <br />
            <strong>Packing</strong> - {Packing || 'N/A'} <br />
            <strong>Availability</strong> - {Availability || 'N/A'} <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
