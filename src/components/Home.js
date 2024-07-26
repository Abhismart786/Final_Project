import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToAboutUs = () => {
    navigate('/about-us');
  };

  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="products-container">
        <Products />
      </div>
      <div className="about-us-button-container">
        <button className="about-us-button" onClick={navigateToAboutUs}>About Us</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
