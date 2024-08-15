import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToAboutUs = () => {
    navigate('/about-us');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} OUICK BUY. All rights reserved.</p>
        <button className="about-us-button" onClick={navigateToAboutUs}>About Us</button>
        <p>Contact us: info@QuickBuy.com</p>
      </div>
    </footer>
  );
};

export default Footer;
