import React, { useEffect, useState } from 'react';
import { auth, sendPasswordResetEmail } from './firebaseConfig'; // Import Firebase config
import './ResetPassword.css'; // Import the styling

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(false); // Track button disable state
    const [timer, setTimer] = useState(0); // Countdown timer for button re-enable

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent. Please check your inbox.');
            setIsDisabled(true); // Disable button after sending email
            setTimer(30); // Set countdown for 30 seconds (adjust as needed)
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    useEffect(() => {
        if (isDisabled && timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            // Cleanup the interval on component unmount or when timer reaches 0
            return () => clearInterval(countdown);
        } else if (timer === 0) {
            setIsDisabled(false); // Re-enable the button when timer reaches 0
        }
    }, [isDisabled, timer]);

    return (
        <div className="reset-password-container">
            <div className="reset-password-box">
                <h2>Reset Password</h2>
                <p>Enter your email address to reset your password</p>
                <form onSubmit={handlePasswordReset}>
                    <label>Email address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="reset-password-btn" 
                        disabled={isDisabled}
                    >
                        {isDisabled ? `Wait ${timer}s` : 'Send Reset Email'}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default ResetPassword;
