import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const HackathonDetails = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/hackathons/${id}`)
      .then(response => setHackathon(response.data))
      .catch(error => console.error('Error fetching hackathon:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/api/hackathons/${id}`)
      .then(() => {
        console.log('Hackathon deleted');
        navigate.push('/');
      })
      .catch(error => console.error('Error deleting hackathon:', error));
  };

  if (!hackathon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{hackathon.name}</h1>
      <p>{hackathon.description}</p>
      <p>Level: {hackathon.level}</p>
      <p>Start Date: {hackathon.startDate}</p>
      <p>End Date: {hackathon.endDate}</p>
      <img src={hackathon.image} alt={hackathon.name} />
      <Link to={`/edit-hackathon/${id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default HackathonDetails;
