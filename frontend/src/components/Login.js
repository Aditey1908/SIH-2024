import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithEmailAndPassword, signInWithPopup } from './firebaseConfig'; // Firebase import
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Firebase authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful');
            localStorage.setItem('token', userCredential.user.accessToken);
            console.log(userCredential.user);
            navigate('/dashboard'); // Redirects to the Dashboard page
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };
    const handleGoogleSignIn = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          console.log('User signed in:', result.user);
          // Redirect or handle the signed-in user
        } catch (error) {
          console.error('Google sign-in error:', error.message);
        }
      };

    return (
        <div className="login-container">
            <div className="login-left">
                <h1>iHAUL!</h1>
                <h2>Welcome back!</h2>
                <p>Enter your Credentials to access your account</p>
                <form onSubmit={handleLogin}>
                    <label>Email address</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="/reset-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                    <div className="login-google">
                        <p>or</p>
                         <button onClick={handleGoogleSignIn} className="google-btn">Sign in with Google</button>
                    </div>
                </form>
                <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
            </div>
            <div className="login-right">
                <img src="moving-truck.png" alt="We are moving" className="moving-truck-image"/>
                <p className="moving-text">We are moving</p>
            </div>
        </div>
    );
}

export default Login;
