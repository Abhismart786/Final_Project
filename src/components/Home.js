
import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="products-container">
        <Products />
      </div>
    </div>
  );
};

export default Home;
