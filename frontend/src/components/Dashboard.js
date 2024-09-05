import React from 'react';
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
          <SignOutButton />
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
        <section className="table-section">
          <h2>Truck Statuses</h2>
          {/* Form to input Truck ID */}
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
      </main>
    </div>
  );
}

export default Dashboard;
