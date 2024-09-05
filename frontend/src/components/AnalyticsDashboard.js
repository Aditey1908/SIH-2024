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
                    <li>Truck Details</li>
                    <li>Live Tracking</li>
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

                <section className="map-section">
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
