
import React, { useState, useContext } from 'react';
import { auth } from '../config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import "./Signup.css"
// function signup
const Signup = () => {
  // initializing variable by using set function with the help of usestate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { signInUser } = useContext(CartContext);
// function used to get authentication from firebase to create a new user
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');// clear any previous error
    try {
      //create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      signInUser(userCredential.user);
    } catch (error) {
      setError(error.message);// error message if signin is fail
    }
  };

  

  return (
    // main class container
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
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        {/* button to submit the form */}
        <button type="submit" className="btn btn-success btn-md mybtn">Register</button>
      </form>
      {/* display an error message if any error */}
      {error && <span className="error-msg">{error}</span>}
      <hr />
      <br/>
      <span>Already have an account? Login
        {/* link to nevigate to the login page */}
        <Link to="/login"> Here</Link>
      </span>
    </div>
  );
};

export default Signup;



