// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from './SignUp/welcome-animation.json';
import './compcss/LoginPage.css';
import logo from "../assests/logo.png";

const Login = () => (
  <div className="login-page">
    {/* Logo positioned in the top-left corner */}
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <Link to="/" className="flex items-center">
        <img className="w-32" src={logo} alt="logo" />
      </Link>
    </div>

    {/* "Here to hire talent?" and "Join as a Client" positioned in the top-right corner 
    <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '1rem', color: '#333' }}>Here to hire talent?</span>
      <a href="/signup-client" style={{ fontSize: '1rem', color: 'green', fontWeight: '600' }}>Join as a Client</a>
    </div>
    */}

    <div className="login-container">
      <div className="animation-wrapper">
        <Lottie animationData={loginAnimation} loop />
      </div>
      <div className="form-wrapper">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="sign-up-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  </div>
);

export default Login;
