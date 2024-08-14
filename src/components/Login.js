import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { auth } from '../config/config'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { CartContext } from './CartContext'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  
  const { signInUser } = useContext(CartContext);

  const login = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
      signInUser(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container'>
      <br />
      <h2>Login</h2>
      <br />
      <form autoComplete="off" className='form-group' onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          className='form-control' 
          required
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <br />
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input 
            type={showPassword ? 'text' : 'password'}
            className='form-control' 
            required
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
          <span onClick={togglePasswordVisibility} className="password-toggle-icon">
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <br />
        <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
      </form>
      {error && <span className='error-msg'>{error}</span>}
      <br />
      <span>Don't have an account? Register
        <Link to="/signup"> Here</Link>
      </span>
    </div>
  );
};

export default Login;
