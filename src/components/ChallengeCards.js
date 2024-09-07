// src/components/ChallengeCards.jsx
import React from 'react';

const ChallengeCards = () => {
  const challenges = [
    { title: 'Data Science Bootcamp - Graded Datathon', status: 'Upcoming', time: '00 : 15 : 22',image:'/assets/cardimage/Group 1000002771.png' },
    { title: 'Data Sprint 72 - Butterfly Identification', status: 'Upcoming', time: '00 : 12 : 34',image:'/assets/cardimage/Group 1000002766.png'},
    { title: 'Data Sprint 71 - Weather Recognition', status: 'Active', time: '01 : 17 : 10' },
  ];

  return (
    <section className="challenge-cards">
       {/* <img src={image} alt="" className="challenge-image" /> */}
      <h2>Explore Challenges</h2>
      <div className="challenge-cards-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <span className={`status ${challenge.status.toLowerCase()}`}>{challenge.status}</span>
            <h3>{challenge.title}</h3>
            <p>{challenge.time}</p>
            <button className="btn-secondary">Participate Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeCards;
