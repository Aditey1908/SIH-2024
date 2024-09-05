import React from 'react';
import './Dashboard.css';
import SignOutButton from './SignOutButton';

function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Horizontal navigation bar */}
            <nav className="navbar">
                <div className="logo">Dashly X</div>
                <ul className="menu">
                    <li>Services</li>
                    <li>About Us</li>
                        <li>Support</li>
                    <li>Ship Now</li>
                </ul>
                <div className="signout">
                    <SignOutButton />
                </div>
            </nav>

            <main className="main-content">
                <header className="header">
                    <h1>Dashboard</h1>
                </header>

                <section className="stats-cards">
                    <div className="card">
                        <div className="card-icon">🚚</div>
                        <div className="card-info">
                            <h2>65%</h2>
                            <p>Truck Space Utilization</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">📦</div>
                        <div className="card-info">
                            <h2>120</h2>
                            <p>Active Bookings</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">💲</div>
                        <div className="card-info">
                            <h2>$45K</h2>
                            <p>Total Revenue</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">📅</div>
                        <div className="card-info">
                            <h2>30</h2>
                            <p>Pending Shipments</p>
                        </div>
                    </div>
                </section>

                <section className="booking-summary">
                    <h2>Recent Bookings</h2>
                    <ul>
                        <li><strong>Booking #4521:</strong> 10m³ space from NY to LA</li>
                        <li><strong>Booking #4522:</strong> 8m³ space from SF to Chicago</li>
                        <li><strong>Booking #4523:</strong> 12m³ space from Miami to Dallas</li>
                    </ul>
                </section>

                <section className="chart">
                    <h2>Monthly Truck Utilization</h2>
                    <div className="chart-placeholder">
                        {/* Chart Placeholder */}
                        <p>Chart goes here</p>
                    </div>
                </section>

                <section className="map-section">
                    <h2>Live Truck Locations</h2>
                    <div className="map-placeholder">
                        {/* Map Placeholder */}
                        <p>Map goes here</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
