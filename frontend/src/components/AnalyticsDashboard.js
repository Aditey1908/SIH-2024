import React, { useRef, useState } from 'react';
import axios from 'axios';
import './AnalyticsDashboard.css';
import SignOutButton from './SignOutButton';

function Dashboard() {
  const locations = ['Thane', 'Mulund', 'Bhandup', 'Powai', 'Ghatkopar', 'Chembur', 'Dadar', 'Byculla'];
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [space, setSpace] = useState('');
  const [cost, setCost] = useState(0);
  const [bookingMessage, setBookingMessage] = useState('');

  const bookingFormRef = useRef(null);
  const liveTrackingRef = useRef(null);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/monetization/create-booking', {
        start_location: startLocation,
        end_location: endLocation,
        space_required: parseInt(space),
      });

      setCost(response.data.cost);
      setBookingMessage(response.data.message);
    } catch (error) {
      console.error('Error creating booking:', error);
      setBookingMessage('Failed to create booking. Please try again.');
    }
  };
  const scrollToBookingForm = () => {
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToLiveTracking = () => {
    liveTrackingRef.current?.scrollIntoView({ behavior: 'smooth' });
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
              <li>
                <strong>Order #4521:</strong> 25 packages of 800cm³ from Mumbai to Vapi
              </li>
              <li>
                <strong>Order #4522:</strong> 50 crates of 400cm³ from Delhi to Chandigarh
              </li>
              <li>
                <strong>Order #4523:</strong> 7 packages of 12m³ from Chennai to Bangaluru
              </li>
            </ul>
          </div>

          {/* Package Status Section */}
          <div className="section-card package-status">
            <h2>Package Status</h2>
            <ul>
              <li>
                <strong>Order #4521:</strong> In Transit
              </li>
              <li>
                <strong>Order #4522:</strong> Delivered
              </li>
              <li>
                <strong>Order #4523:</strong> Pending Pickup
              </li>
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
        <section ref={bookingFormRef} className="booking-form">
          <h2>Book a Truck</h2>
          <form onSubmit={handleBookingSubmit}>
            <div>
              <label>Start Location:</label>
              <select
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                required
                
              >
                <option value="">Select start location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>End Location:</label>
              <select
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                required
              >
                <option value="">Select end location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
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
          {(
            <div className="calculated-cost">
              <h3>Estimated Cost: ₹{cost}</h3>
            </div>
          )}
        </section>
        {/* Live Tracking Section */}
        <section ref={liveTrackingRef} className="map-section">
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
