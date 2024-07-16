// src/components/AddToCartButton.js
import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button className="add-to-cart-button" onClick={onAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
