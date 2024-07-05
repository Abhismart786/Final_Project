import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import Products from './components/Products';
import './App.css';
import { ProductsProvider } from './global/ProductsContext'; // Ensure correct import path

import  Login  from './components/Login'
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/addproducts' element={<AddProducts />} />
            <Route exact path='/products' element={<Products />} /> {/* Added Products Route */}
           <Route path='/signup' Component={Signup}/>
           <Route path='/login' Component={Login}/>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
