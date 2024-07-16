import React from 'react';
import './Product.css';

const Product = ({ item, onAddToCart }) => {
    const { id, price, image, title } = item;

    return (
        <div className="product-container">
            <img src={image} alt="product" className="product-image" />
            <div className="product-details">
                <p className="product-id">ID: {id}</p>
                <p className="product-title">Title: {title}</p>
                <p className="product-price">Price: ${price}</p>
                <button 
                    className="product-button" 
                    onClick={() => onAddToCart(item)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
