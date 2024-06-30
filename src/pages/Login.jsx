// import React, { useState } from 'react';
// import '../styles/login.css'; // Import your CSS file
// import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { app } from '../server/Firebase';

// const auth = getAuth(app);

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null); // State to hold user information
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const loggedInUser = userCredential.user;
//         setUser(loggedInUser); // Set the user state
//         console.log("signed in...");
//         alert("Signed in successfully");
//         navigate('/home');
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Error:", errorCode, errorMessage);
//         alert(`Error: ${errorMessage}`);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const loggedInUser = result.user;
//         setUser(loggedInUser); // Set the user state
//         console.log("Google sign-in successful");
//         alert("Google sign-in successful");
//         navigate('/home');
//       })
//       .catch((error) => {
//         console.error("Google sign-in error:", error);
//         alert("Google sign-in error");
//       });
//   };

//   // Render user information if logged in
//   if (user) {
//     return (
//       <>
//         <Navbar /> {/* Include your Navbar component */}
//         <div className="background-image">
//           <div className="container">
//             <h1>Welcome, {user.email}!</h1>
//             {/* Add more content for logged-in users */}
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Render login form if user is not logged in
//   return (
//     <>
//       <Navbar /> {/* Include your Navbar component */}
//       <div className="background-image">
//         <div className="container">
//           <h1>Welcome Back!</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input-field">
//               <label htmlFor="email">Email:</label>
//               <input 
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>
//             <div className="input-field">
//               <label htmlFor="password">Password:</label>
//               <input 
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <div className="checkbox-field">
//               <input type="checkbox" id="remember_me" name="remember_me" />
//               <label htmlFor="remember_me">Remember Me</label>
//             </div>
//             <button type="submit">Login</button>
//             <div className="google-signup">
//               or 
//               <button type="button" className="google-login-button" onClick={handleGoogleSignIn}>
//                 <span className="google-login-icon"></span>
//               </button>
//             </div>
//           </form>
//           <p className="forgot-password">Forgot Password?</p>
//           <p className="no-account">Don't have an account? <Link to="/signup">Sign Up</Link></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import '../styles/login.css'; // Import your CSS file
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../server/Firebase';

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // State to hold user information
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        setUser(loggedInUser); // Set the user state
        console.log("signed in...");
        alert("Signed in successfully");
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
        alert(`Error: ${errorMessage}`);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser); // Set the user state
        console.log("Google sign-in successful");
        alert("Google sign-in successful");
        navigate('/home');
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        alert("Google sign-in error");
      });
  };

  // Render user information if logged in
  if (user) {
    return (
      <>
        <Navbar /> {/* Include your Navbar component */}
        <div className="login-container">
          <div className="login-content">
            <h1>Welcome, {user.email}!</h1>
            {/* Add more content for logged-in users */}
          </div>
        </div>
      </>
    );
  }

  // Render login form if user is not logged in
  return (
    <>
      <Navbar /> {/* Include your Navbar component */}
      <div className="login-container">
        <div className="login-content">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-input-field">
              <label htmlFor="login-email">Email:</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="login-email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="login-input-field">
              <label htmlFor="login-password">Password:</label>
              <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="login-password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="login-checkbox-field">
              <input type="checkbox" id="login-remember_me" name="remember_me" />
              <label htmlFor="login-remember_me">Remember Me</label>
            </div>
            <button  type="submit">Login</button>
            <div className="login-google-signup">
              or 
              <button id="gl" type="button" className="login-google-login-button" onClick={handleGoogleSignIn}>
                <span className="login-google-login-icon"></span>
              </button>
            </div>
          </form>
          <p className="login-forgot-password">Forgot Password?</p>
          <p className="login-no-account">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
