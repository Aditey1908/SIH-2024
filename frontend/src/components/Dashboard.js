import React from 'react';
import './Dashboard.css';
import SignOutButton from './SignOutButton'; // Import the SignOutButton component.

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="logo">Dashly X</div>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Your Bookings</li>
                    <li>History</li>
                    <li>Integrations</li>
                    <li>Settings</li>
                    <li>Support</li>
                    <li>About</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Dashboard</h1>
                    <SignOutButton /> {/* Add the SignOutButton to the top-right corner */}
                </header>
                <section className="stats-cards">
                    <div className="card">
                        <div className="card-icon">👁️</div>
                        <div className="card-info">
                            <h2>50.8K</h2>
                            <p>Pageviews</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">👥</div>
                        <div className="card-info">
                            <h2>23.6K</h2>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">➕</div>
                        <div className="card-info">
                            <h2>4.5K</h2>
                            <p>New sign ups</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">💲</div>
                        <div className="card-info">
                            <h2>3.3K</h2>
                            <p>Subscriptions</p>
                        </div>
                    </div>
                </section>
                <section className="chart">
                    <h2>Monthly pageviews</h2>
                    <div className="chart-placeholder">
                        {/* Replace with an actual chart */}
                        <p>Chart goes here</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
