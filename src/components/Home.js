import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import '../css/Home.css';

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="wrapper">
      <Navbar />
      {/* <Products /> */}
      <h3>this is test vfvefre</h3>
      <h3>this is test vfvefre</h3>
      
    </div>
  );
};

export default Home;
