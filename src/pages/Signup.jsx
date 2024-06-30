import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/signup.css'; // Ensure correct path to your CSS file
import { app } from '../server/Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const createUser = (e) => {
    e.preventDefault(); // Prevent form submission

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('Sign up successfully');
        alert('Sign up successfully');
        navigate('/'); // Navigate to '/' after successful signup

        // Clear form fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:', errorCode, errorMessage);
        alert(`Error: ${errorMessage}`);
      });
  };

  return (
    <>
      <Navbar />
      <div id="sign-up">
        <div className="sign-up-container">
          <h1>Create Account</h1>
          <form onSubmit={createUser}>
            <div className="sign-up-input-field">
              <label htmlFor="email">Email:</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="sign-up-input-field">
              <label htmlFor="password">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="sign-up-input-field">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button id="sign-up-button" type="submit">Sign Up</button> 
          </form>
          <p className="no-account">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Signup;
