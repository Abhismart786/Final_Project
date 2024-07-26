import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';
import Footer from "./Footer";
// fucntion for the component cart 
const Cart = () => {
  // initializing variables
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState('');


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  // function used to remove item from the cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    setCheckoutMessage('Thank you for shopping!');
    // Additional logic for checkout process
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
       {/* if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {/* map function used to load images in the cart */}
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                {/* button used to remove items from the cart */}
                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${getTotalPrice()}</p>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            {checkoutMessage && <p>{checkoutMessage}</p>}
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default Cart;
