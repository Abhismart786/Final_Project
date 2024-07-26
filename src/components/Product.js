import React from 'react';
import './Product.css';



// Product component which takes 'item' and 'onAddToCart' as props
const Product = ({ item, onAddToCart }) => {
  // the properties of the 'item' object for easier access
  const { id, price, image, title } = item;

  // Function to handle the 'Add To Cart' button click
  const handleAddToCart = () => {
    // Display an alert to the user that the product is added to the cart
    alert('Your product is added to the cart');
    // Call the 'onAddToCart' function passed as a prop with the current item
    onAddToCart(item);
  };

  return (
   
    <div className="product-container">
      {/* Display the product image */}
      <img src={image} alt="product" className="product-image" />
      {/* Container for the product details */}
      <div className="product-details">
        <p className="product-id">ID: {id}</p>
        <p className="product-title">Title: {title}</p>
        <p className="product-price">Price: ${price}</p>
        {/* Button to add the product to the cart, with an onClick event handler */}
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

export default Product; 
