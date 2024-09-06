
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithEmailAndPassword, signInWithPopup } from './firebaseConfig'; // Firebase import
import './Login.css';
import truckImage from '../images/Login_img.jpg'; // Importing the image

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful');
            localStorage.setItem('token', userCredential.user.accessToken);
            if (rememberMe) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            }
            navigate('/dashboard');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            localStorage.setItem('token', result.user.accessToken);
            navigate('/dashboard');
        } catch (error) {
            console.error('Google sign-in error:', error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <h1>iHAUL!</h1>
                <p>Enter your Credentials to access your account</p>
                <form onSubmit={handleLogin}>
                    <label>Email address</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="login-options">
                        <label>
                        <p>Remember Me</p>
                            <input 
                                type="checkbox"
                                checked={rememberMe} 
                                onChange={(e) => setRememberMe(e.target.checked)}
                             />
                            
                        </label>
                        <a href="/reset-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                    <div className="login-google">
                        <p>or</p>
                         <button type="button" onClick={handleGoogleSignIn} className="google-btn"><a1>Sign in with </a1><a2>G</a2><a3>O</a3><a4>O</a4><a5>G</a5><a6>L</a6><a7>E</a7></button>
                    </div>
                </form>
                <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
            </div>
            <div className="login-right">
                <img src={truckImage}  className="moving-truck-image" />
                
            </div>
        </div>
    );
}

export default Login;