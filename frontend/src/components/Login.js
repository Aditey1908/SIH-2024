import React from 'react';
import './Login.css'; // We will create this CSS file for styling.

function Login() {
    return (
        <div className="login-container">
            <div className="login-left">
                <h1>iHAUL!</h1>
                <h2>Welcome back!</h2>
                <p>Enter your Credentials to access your account</p>
                <form>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
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
