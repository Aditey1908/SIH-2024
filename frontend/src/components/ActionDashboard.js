import React from 'react';
import './ActionDashboard.css'; // Create this CSS file for styling.

function ActionDashboard() {
    return (
        <div className="action-dashboard-container">
            <aside className="sidebar">
                <div className="logo">Action Center</div>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Alerts</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Action Dashboard</h1>
                    <p>September 5, 2024</p>
                </header>
                <section className="action-buttons">
                    <button className="action-button">Tyre Burst</button>
                    <button className="action-button">Pee Break</button>
                    <button className="action-button">Accident</button>
                    <button className="action-button">Road Blockage</button>
                    <button className="action-button">Tyre Burst</button>
                    <button className="action-button">Pee Break</button>
                    <button className="action-button">Accident</button>
                    <button className="action-button">Road Blockage</button>
                    <button className="action-button">Tyre Burst</button>
                    <button className="action-button">Pee Break</button>
                    <button className="action-button">Accident</button>
                    <button className="action-button">Road Blockage</button>
                </section>
            </main>
        </div>
    );
}

export default ActionDashboard;
