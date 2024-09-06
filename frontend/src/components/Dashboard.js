import axios from 'axios';
import React, { useRef, useState } from 'react';
import './Dashboard.css';
import SignOutButton from './SignOutButton';

function Dashboard() {
  const [data, setData] = useState([]);
  const [truckId, setTruckId] = useState(''); // State to handle dynamic truck ID input

  const recentBookingsRef = useRef(null);
  const truckStatusesRef = useRef(null);
  const supportRef = useRef(null);
  const aboutRef = useRef(null);

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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar navigation */}
      <aside className="sidebar">
        <div className="logo">Dashly X</div>
        <ul className="menu">
          <li>Profile</li>
          <li onClick={() => scrollToSection(recentBookingsRef)}>Recent Bookings</li>
          <li onClick={() => scrollToSection(truckStatusesRef)}>Truck Status</li>
          <li onClick={() => scrollToSection(supportRef)}>Support</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li>History</li>
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
        <section ref={recentBookingsRef} className="booking-summary">
          <h2>Recent Bookings</h2>
          <ul>
            <li><strong>Booking #4521:</strong> 10 packages of 10m³ from Mumbai to Ahmedabad</li>
            <li><strong>Booking #4522:</strong> 7 packages of 8m³ from Indore to Bhopal</li>
            <li><strong>Booking #4523:</strong> 12 packages of 5m³ space from Delhi to Chandigarh</li>
          </ul>
        </section>

        {/* Form and table for truck statuses */}
        <section ref={truckStatusesRef} className="table-section">
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

        {/* Support section */}
        <section ref={supportRef} className="support-section">
  <h2>Support</h2>
  <p>If you need any assistance, please contact our support team at <a href="mailto:support@example.com">support@example.com</a> or call <a href="tel:1-800-123-456">1-800-123-456</a>.</p>
</section>


        {/* About section */}
        <section ref={aboutRef} className="about-section">
  <h2>About Us</h2>
  <p>
    Ihaul is India’s first partial space renting solution for trucks, powered by India Post. We are revolutionizing logistics by offering a seamless way for businesses and individuals to rent out unused space in trucks, maximizing efficiency and reducing waste in transportation. With Ihaul, you can optimize every journey by sharing cargo space, making logistics more accessible and cost-effective for all.
  </p>
  <p>
    Since our inception, we have rapidly expanded, leveraging India Post’s extensive network to reach even the most remote corners of the country. With a presence in every state and over 18,600 pin codes, Ihaul ensures that businesses and individuals can easily access our services. Our cutting-edge technology, integrated with India Post’s robust infrastructure, enables us to deliver timely and reliable solutions, 24 hours a day, 7 days a week.
  </p>
  <p>
    Our network includes 24 automated sort centres, 94 gateways, 2,880 direct delivery centres, and a growing team of logistics experts. This vast setup allows us to serve the logistics needs of businesses with unparalleled flexibility and speed. Ihaul is paving the way for a new era of logistics, where every truck on the road is used to its full potential.
  </p>
  <a href="#services" className="cta-button">Explore Our Services</a>
</section>

      </main>
    </div>
  );
}

export default Dashboard;
