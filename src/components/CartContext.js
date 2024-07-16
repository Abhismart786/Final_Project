
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // User state
  const navigate = useNavigate();

  const addToCart = (item) => {
    if (user) {
      setCartItems([...cartItems, item]);
    } else {
      navigate('/signup');
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const signInUser = (user) => {
    setUser(user);
    navigate('/');
  };

  const signOutUser = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, user, signInUser, signOutUser }}>
      {children}
    </CartContext.Provider>
  );
};
