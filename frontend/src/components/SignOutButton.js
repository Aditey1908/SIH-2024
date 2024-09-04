// src/components/SignOutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignOutButton.css'; // Create a CSS file for styling.

function SignOutButton() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform any sign-out logic here, such as clearing authentication tokens.
        navigate('/');
    };

    return (
        <button className="signout-button" onClick={handleSignOut}>
            Sign Out
        </button>
    );
}

export default SignOutButton;
