import React from 'react';
import './Product.css';

const Product = ({ item, onAddToCart }) => {
  const { id, price, image, title } = item;
  const wordLimit = 3; // Set the specific word limit here

  const handleAddToCart = () => {
    alert('Your product '+ title +' is added to your cart');
    onAddToCart(item);
  };

  const truncatedTitle = truncateTitle(title, wordLimit);

  return (
    <div className="product-container">
      <img src={image} alt="product" className="product-image" />
      <div className="product-details">
        <p className="product-id">ID: {id}</p>
        <p className="product-title">
          {truncatedTitle}
        </p>
        <p className="product-price">Price: ${price}</p>
        <button 
          className="product-button" 
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return title;
};

export default Product;
