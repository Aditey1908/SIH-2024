import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import truckImage from '../images/Login_img.jpg';
import { auth, createUserWithEmailAndPassword } from './firebaseConfig'; // Firebase import for sign-up
import './SignUp.css'; // Import the styling

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Firebase sign-up authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
            alert('Account created successfully!');
            navigate('/dashboard'); // Redirect to the Dashboard page after sign-up
        } catch (error) {
            alert('Sign up failed: ' + error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <h1>iHAUL!</h1>
                <h2>Get Started Now!</h2>
                <p>Enter your credentials to make your account</p>
                <form onSubmit={handleSignUp}>
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
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="signup-btn">Create</button>
                    <div className="signup-google">
                        <p>or</p>
                        <button className="google-btn"><a1>Sign in with </a1><a2>G</a2><a3>O</a3><a4>O</a4><a5>G</a5><a6>L</a6><a7>E</a7></button>
                    </div>
                </form>
                <p>Already have an account? <a href="/">Sign In</a></p>
            </div>
            <div className="signup-right">
            <img src={truckImage}  className="moving-truck-image" />
            </div>
        </div>
    );
}

export default SignUp;
