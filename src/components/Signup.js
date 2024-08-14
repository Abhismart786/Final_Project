

import React, { useState, useContext } from 'react';
import { auth } from '../config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { signInUser } = useContext(CartContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      signInUser(userCredential.user);
    } catch (error) {
      setError(error.message); // Error message if sign-in fails
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <br />
      <h2>Signup</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={handleSignup}>
        <label htmlFor="Name">Name</label>
        <br />
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span onClick={togglePasswordVisibility} className="password-toggle-icon">
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">Register</button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <hr />
      <br />
      <span>Already have an account? Login
        <Link to="/login"> Here</Link>
      </span>
    </div>
  );
};

export default Signup;
