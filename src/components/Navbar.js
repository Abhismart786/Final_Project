
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ecommerce.svg';
import cartLogo from '../images/add-to-cart.png';
import './Navbar.css';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems, user, signOutUser } = useContext(CartContext);
  
  return (
    <div className="navbar">
        
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="E-commerce Logo" width="100px" />
        </Link>
      </div>
      <div className='heading'>
        <h2>WELCOME TO SHOPPING APP</h2>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-link">
          <img src={cartLogo} alt="Add to Cart Logo" className="cart-logo" />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
        <div className="navbar-links">
          {user ? (
            <span onClick={signOutUser} className="navlink">LOGOUT</span>
          ) : (
            <>
              <span><Link to="/signup" className="navlink">SIGN UP</Link></span>
              <span><Link to="/login" className="navlink">LOGIN</Link></span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
