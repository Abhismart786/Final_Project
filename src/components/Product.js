import React from "react";
import './Product.css';

const Product = ({ item }) => {
  const { id, price,  image } = item;
  return (
    <div className="product-container">
      <img src={image} alt="product" className="product-image" />
      <div className="product-details">
        <p className="product-id">ID: {id}</p>
        <p className="product-price">Price: ${price}</p>
        {/* <p className="product-description">{description}</p> */}
        <button className="product-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
