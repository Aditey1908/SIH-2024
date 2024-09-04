import React from 'react';
import './AnalyticsDashboard.css';
import SignOutButton from './SignOutButton'; // Import the SignOutButton

function AnalyticsDashboard() {
    return (
        <div className="analytics-dashboard-container">
            <aside className="sidebar">
                <div className="logo">Analytics Hub</div>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Analytics Dashboard</h1>
                    <SignOutButton /> {/* Add the SignOutButton to the top-right corner */}
                </header>
                <section className="stats-cards">
                    <div className="card">
                        <div className="card-info">
                            <h2>75.2K</h2>
                            <p>Visitors</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-info">
                            <h2>12.3K</h2>
                            <p>New Leads</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-info">
                            <h2>8.4K</h2>
                            <p>Conversions</p>
                        </div>
                    </div>
                </section>
                <section className="chart">
                    <h2>Sales Overview</h2>
                    <div className="chart-placeholder">
                        {/* Replace with an actual chart */}
                        <p>Chart goes here</p>
                    </div>
                </section>
                <section className="additional-charts">
                    <div className="chart">
                        <h2>User Engagement</h2>
                        <div className="chart-placeholder">
                            {/* Replace with an actual chart */}
                            <p>Chart goes here</p>
                        </div>
                    </div>
                    <div className="chart">
                        <h2>Revenue Trends</h2>
                        <div className="chart-placeholder">
                            {/* Replace with an actual chart */}
                            <p>Chart goes here</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AnalyticsDashboard;
