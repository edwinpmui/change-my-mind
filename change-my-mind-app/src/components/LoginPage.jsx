import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;