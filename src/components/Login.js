import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from '../config/config'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { CartContext } from './CartContext'; 
const Login = () => {
  //  state variables to manage input values and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // signInUser function from CartContext to update the user state
  const { signInUser } = useContext(CartContext);

  // Function to handle form submission and user login
  const login = async (e) => {
    e.preventDefault(); 
    try {
      // try to sign in the user with Firebase 
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Clearing the input fields and error message upon successful login
      setEmail('');
      setPassword('');
      setError('');
      // Updating the context with the signed-in user's information
      signInUser(userCredential.user);
    } catch (err) {
      // error message if login fails
      setError(err.message);
    }
  };

  return (
    <div className='container'>
      <br />
      <h2>Login</h2>
      <br />
      {/* Login form */}
      <form autoComplete="off" className='form-group' onSubmit={login}>
        {/* Email input field */}
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' required
          onChange={(e) => setEmail(e.target.value)} value={email} />
        <br />
        {/* Password input field */}
        <label htmlFor="password">Password</label>
        <input type="password" className='form-control' required
          onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        {/* Submit button */}
        <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
      </form>
      {/* show error message if there is an error */}
      {error && <span className='error-msg'>{error}</span>}
      <br />
      {/* Link to the signup page for users who don't have an account */}
      <span>Don't have an account? Register
        <Link to="/signup"> Here</Link>
      </span>
    </div>
  );
};

export default Login;

