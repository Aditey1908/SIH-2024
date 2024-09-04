import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TruckStatus = () => {
  const [truckId, setTruckId] = useState('');
  const [status, setStatus] = useState(null);

  const fetchStatus = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/trucks/status/${id}`);
      setStatus(response.data);
    } catch (error) {
      console.error('Error fetching truck status:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStatus(truckId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={truckId}
          onChange={(e) => setTruckId(e.target.value)}
          placeholder="Enter Truck ID"
        />
        <button type="submit">Fetch Status</button>
      </form>
      {status ? (
        <div>
          <h2>Truck Status</h2>
          <p>ID: {status.truck_id}</p>
          <p>Current Location: {status.current_location}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TruckStatus;
