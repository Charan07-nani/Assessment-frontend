// src/components/Features.jsx
import React from 'react';

const FeaturesDisplay = () => {
  const topfeatures = [
    {
      title: 'Prove your skills',
      description: 'Gain experience by solving real-world problems.',
      icon: '/assets/icons/carbon_notebook-reference.svg'
    },
    {
      title: 'Learn from community',
      description: 'Analyze solutions submitted by others.',
      icon: '/assets/icons/Vector.svg'
    },
  ];

  const bottomfeatures = [
    {
      title: 'Challenge yourself',
      description: 'Participate in challenges to improve your skills.',
      icon: '/assets/icons/Robot.svg'
    },
    {
      title: 'Earn recognition',
      description: 'Stand out by performing well in AI challenges.',
      icon: '/assets/icons/IdentificationCard.svg'
    },
  ];

  return (
    <div className="features-section">
      <div className="top-section">
        <h2>Why Participate in AI Challenges?</h2>
        <div className="feature-list">
          {topfeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} alt="" className="feature-icon" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-section">
        <div className="feature-list">
          {bottomfeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} alt="" className="feature-icon" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesDisplay;
