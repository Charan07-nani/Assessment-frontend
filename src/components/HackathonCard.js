import React from 'react';
import { Link } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => {
  const { id, name, startDate, endDate, level, description } = hackathon;

  return (
    <div className="hackathon-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Level: {level}</p>
      <p>Start Date: {new Date(startDate).toLocaleDateString()}</p>
      <p>End Date: {new Date(endDate).toLocaleDateString()}</p>
      <Link to={`/hackathon/${id}`}>View Details</Link>
    </div>
  );
};

export default HackathonCard;
