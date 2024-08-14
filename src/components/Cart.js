import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';
import Footer from "./Footer";

const Cart = () => {
  const { cartItems, removeFromCart,clearCart } = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [isCheckedOut, setIsCheckedOut] = useState(false);
// this is  the function of getting total price of the products
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
// remove function used to remove items from the cart
  const handleRemoveFromCart = (itemId) => {
    if (isCheckedOut) {
      alert('Checkout is done. You cannot remove items.');
    } else {
      removeFromCart(itemId);
    }
  };

  const handleCheckout = () => {
    setIsCheckedOut(true);
    clearCart();
    setTimeout(() => {
      setCheckoutMessage('Thank you for shopping!');
      alert('Thank you for shopping!');
    }, 0)
    // Additional logic for checkout process
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (// this is ternary operator if the condition if cart is empty upper portion is appear else lower portion will appear
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <button 
                  className="remove-button" 
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            {/* calling function to get total price */}
            <p>Total: ${getTotalPrice()}</p>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            {checkoutMessage && <p>{checkoutMessage}</p>}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
