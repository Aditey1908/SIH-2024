import React from 'react';
import './ActionDashboard.css';
import SignOutButton from './SignOutButton'; // Import the SignOutButton

function ActionDashboard() {
    return (
        <div className="action-dashboard-container">
            <aside className="sidebar">
                <div className="logo">Action Center</div>
                <ul className="menu">
                    <li>Dashboard</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Action Dashboard</h1>
                    <SignOutButton /> {/* Add the SignOutButton to the top-right corner */}
                </header>
                <section className="action-buttons">
  <button className="action-button reason-1">Reason 1</button>
  <button className="action-button reason-2">Reason 2</button>
  <button className="action-button reason-3">Reason 3</button>
  <button className="action-button reason-4">Reason 4</button>
  <button className="action-button reason-5">Reason 5</button>
  <button className="action-button reason-6">Reason 6</button>
  <button className="action-button reason-7">Reason 7</button>
  <button className="action-button reason-8">Reason 8</button>
</section>


<div className="helpline">
  For emergencies, call the Helpline: 1-800-999-000
</div>

            </main>
        </div>
    );
}

export default ActionDashboard;
