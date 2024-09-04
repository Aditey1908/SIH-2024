import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // We will create this CSS file for styling.

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically check credentials, for now we'll just redirect
        if (email && password) {
            navigate('/hello-world'); // Redirects to the Hello World page
        } else {
            alert('Please enter your email and password');
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
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                    <div className="login-google">
                        <p>or</p>
                        <button type="button" className="google-btn">Sign in with Google</button>
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
