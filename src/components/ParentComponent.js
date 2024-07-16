import React from 'react';
import AddToCartButton from './AddToCartButton';

const ParentComponent = () => {
  const handleAddToCart = () => {
    console.log('Item added to cart'); // Debug
    // Additional logic for adding item to cart
  };

  return (
    <div>
      <h1>Product Title</h1>
      <AddToCartButton onAddToCart={handleAddToCart} />
    </div>
  );

};


export default ParentComponent;
