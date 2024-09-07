import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CreateHackathon');  // This will redirect to the 'About' page
  };

  return (
    <div>
      <h1>Home Page</h1>
      kjdbckjdszbvdkzjfvl ck
      <button onClick={handleClick}>CreateHackathon</button>
    </div>
  );
}

export default Home;