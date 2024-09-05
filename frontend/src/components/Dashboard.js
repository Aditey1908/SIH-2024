import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import SignOutButton from './SignOutButton';

function Dashboard() {
  const [data, setData] = useState([]);
  const [truckId, setTruckId] = useState(''); // State to handle dynamic truck ID input

  const fetchTruckStatuses = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/trucks/status/${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching truck statuses:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (truckId) fetchTruckStatuses(truckId);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar navigation */}
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

      {/* Main content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <SignOutButton />
        </header>

        {/* Stats cards */}
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

        {/* Recent bookings */}
        <section className="booking-summary">
          <h2>Recent Bookings</h2>
          <ul>
            <li><strong>Booking #4521:</strong> 10m³ space from NY to LA</li>
            <li><strong>Booking #4522:</strong> 8m³ space from SF to Chicago</li>
            <li><strong>Booking #4523:</strong> 12m³ space from Miami to Dallas</li>
          </ul>
        </section>

        {/* Form and table for truck statuses */}
        <section className="table-section">
          <h2>Truck Statuses</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={truckId}
              onChange={(e) => setTruckId(e.target.value)}
              placeholder="Enter Truck ID"
            />
            <button type="submit">Fetch Truck Status</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Truck ID</th>
                <th>Total Capacity</th>
                <th>Route ID</th>
                <th>Last Location</th>
                <th>Current Location</th>
                <th>Next Location</th>
                <th>Updated At</th>
                <th>Time At Last</th>
                <th>Time At Current</th>
                <th>Time At Next</th>
              </tr>
            </thead>
            <tbody>
              {data.map((truck, index) => (
                <tr key={index}>
                  <td>{truck.truck_id}</td>
                  <td>{truck.total_capacity}</td>
                  <td>{truck.route_id}</td>
                  <td>{truck.last_location}</td>
                  <td>{truck.current_location}</td>
                  <td>{truck.next_location}</td>
                  <td>{new Date(truck.updated_at).toLocaleString()}</td>
                  <td>{new Date(truck.timeAt_last).toLocaleString()}</td>
                  <td>{new Date(truck.timeAt_current).toLocaleString()}</td>
                  <td>{new Date(truck.timeAt_next).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Placeholder for the chart */}
        <section className="chart">
          <h2>Monthly Truck Utilization</h2>
          <div className="chart-placeholder">
            <p>Chart goes here</p>
          </div>
        </section>

        {/* Placeholder for the map */}
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

export default Dashboard;
