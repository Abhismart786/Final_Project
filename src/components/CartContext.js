
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// create the cartcontext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // User state
  const navigate = useNavigate(); //hook to nevigate between routes
  // function used to check the authentication
  const addToCart = (item) => {
    if (user) {
      setCartItems([...cartItems, item]);
    } else {
      navigate('/signup');
    }
  };
  // remove items  from the cart component
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };
 // if the user signin successfully
  const signInUser = (user) => {
    setUser(user);
    navigate('/');
  };
 // if the user already have the account
  const signOutUser = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    
    // CartContext.Provider is used to make the context values available to the entire component tree
    <CartContext.Provider 
        // The value prop contains the context values that we want to provide
        value={{
            cartItems,       // Current items in the shopping cart
            addToCart,       // Function to add an item to the cart
            removeFromCart,  // Function to remove an item from the cart
            user,            // Current authenticated user
            signInUser,      // Function to sign in the user
            signOutUser      // Function to sign out the user
        }}
    >
      {/* Render the children components that will have access to the CartContext values */}
      {children}
    </CartContext.Provider>
  );

};
