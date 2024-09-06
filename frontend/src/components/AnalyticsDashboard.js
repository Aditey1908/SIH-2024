import React, { useRef, useState } from 'react';
import './AnalyticsDashboard.css';
import SignOutButton from './SignOutButton';

function Dashboard() {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [space, setSpace] = useState('');
    const [cost, setCost] = useState(0);

    const bookingFormRef = useRef(null); // Ref for the booking section
    const liveTrackingRef = useRef(null); // Ref for the live tracking section

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const calculatedCost = calculateCost(space);
        setCost(calculatedCost);
        // Submit booking information to the backend if required
    };

    const calculateCost = (selectedSpace) => {
        const costPerUnitSpace = 50; // Example cost per unit of space
        return selectedSpace * costPerUnitSpace;
    };

    const scrollToBookingForm = () => {
        bookingFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToLiveTracking = () => {
        liveTrackingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="dashboard-container">
            {/* Horizontal navigation bar */}
            <nav className="navbar">
                <div className="logo">Dashly X</div>
                <ul className="menu">
                    <li onClick={scrollToBookingForm}>Book a Truck</li>
                    <li>Truck Details</li>
                    <li onClick={scrollToLiveTracking}>Live Tracking</li> {/* Scroll to live tracking section */}
                    <li>Latest Updates</li>
                </ul>
                <div className="signout">
                    <SignOutButton /> {/* Log Out Button */}
                </div>
            </nav>

            <main className="main-content">
                <header className="header">
                    <h1>Dashboard</h1>
                </header>

                <div className="dashboard-sections">
                    {/* Recent Orders Section */}
                    <div className="section-card booking-summary">
                        <h2>Recent Orders</h2>
                        <ul>
                            <li><strong>Order #4521:</strong> 25 packages of 800cm^3 from Mumbai to Vapi</li>
                            <li><strong>Order #4522:</strong> 50 crates of 400cm^3 from Delhi to Chandigarh</li>
                            <li><strong>Order #4523:</strong> 7 packages of 12m³ from Chennai to Bangaluru</li>
                        </ul>
                    </div>

                    {/* Package Status Section */}
                    <div className="section-card package-status">
                        <h2>Package Status</h2>
                        <ul>
                            <li><strong>Order #4521:</strong> In Transit</li>
                            <li><strong>Order #4522:</strong> Delivered</li>
                            <li><strong>Order #4523:</strong> Pending Pickup</li>
                        </ul>
                    </div>

                    {/* Transactions Section */}
                    <div className="section-card transactions-summary">
                        <h2>Transactions</h2>
                        <div className="transaction-card">
                            <h3>Last Transaction</h3>
                            <p>$45K</p>
                        </div>
                        <div className="transaction-card">
                            <h3>Total Orders</h3>
                            <p>120</p>
                        </div>
                    </div>
                </div>

                <section className="chart">
                    <h2>Monthly Truck Utilization</h2>
                    <div className="chart-placeholder">
                        <p>Chart goes here</p>
                    </div>
                </section>

                {/* Booking Form */}
                <section ref={bookingFormRef} className="booking-form"> {/* Attach ref to booking form */}
                    <h2>Book a Truck</h2>
                    <form onSubmit={handleBookingSubmit}>
                        <div>
                            <label>Start Location:</label>
                            <input
                                type="text"
                                value={startLocation}
                                onChange={(e) => setStartLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>End Location:</label>
                            <input
                                type="text"
                                value={endLocation}
                                onChange={(e) => setEndLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Amount of Space:</label>
                            <select
                                value={space}
                                onChange={(e) => setSpace(e.target.value)}
                                required
                            >
                                <option value="">Select space</option>
                                <option value="5">5m³</option>
                                <option value="10">10m³</option>
                                <option value="15">15m³</option>
                                <option value="20">20m³</option>
                                <option value="25">25m³</option>
                                <option value="30">30m³</option>
                            </select>
                        </div>
                        <button type="submit">Calculate Cost</button>
                    </form>
                    {cost > 0 && (
                        <div className="calculated-cost">
                            <h3>Estimated Cost: ${cost}</h3>
                        </div>
                    )}
                </section>

                {/* Live Tracking Section */}
                <section ref={liveTrackingRef} className="map-section"> {/* Attach ref to live tracking section */}
                    <h2>Live Truck Locations</h2>
                    <div className="map-placeholder">
                        <p>Map goes here</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
