import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => { axios.get('/api/hackathons').then(response => setHackathons(response.data)).catch(error => console.error('Error fetching hackathons:', error)); }, []);

  // Implement sorting, filtering, and searching here

  return (
    <div>
      <h1>Hackathons Dashboard</h1>
      <p>Welcome to the Hackathon Dashboard!</p>
      <Link to="/CreateHackathon">Create New Hackathon</Link>
      <ul>
        {hackathons.map(hackathon => (
          <li key={hackathon.id}>
            <Link to={`/hackathon/${hackathon.id}`}>
              {hackathon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
