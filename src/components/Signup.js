import React, { useState } from 'react';
import { auth, googleProvider } from '../config/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      // Optionally, update the user's profile with their name
      // await updateProfile(userCredential.user, { displayName: name });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
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
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">Register</button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <hr />
      <br/>
      <span>Already have an account? Login
        <Link to="/login "> Here</Link>
      </span>
      {/* <button onClick={handleGoogleSignIn} className="btn btn-primary btn-md mybtn">Sign in with Google</button>
     */}
    </div>
  );
};

export default Signup;
