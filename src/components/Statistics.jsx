// src/components/Statistics.jsx
import React from 'react';

const Statistics = () => {
  const stats = [
    { title: '100k+', description: 'AI model submissions', icon:"/assets/icons/Group 1000002515.svg" },
    { title: '50k+', description: 'Data Scientists',icon:"/assets/icons/Group 1000002516.svg" },
    { title: '100+', description: 'AI Challenges hosted',icon:"/assets/icons/Group 1000002518.svg" },
  ];

  return (
    <section className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <img src={stat.icon} alt={stat.title} className="stat-icon" />
          <h3>{stat.title}</h3>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;