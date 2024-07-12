

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () =>{

    return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} /> 
            </Routes>
          </BrowserRouter>
      </div>
    );
  }


export default App;
