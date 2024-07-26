
import React from 'react';
import './AddToCartButton.css';
// function that help to add items to cart by using add to cart button
const AddToCartButton = ({ onAddToCart }) => {
  return (
    // button used to add products to the cart
    <button className="add-to-cart-button" onClick={onAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
