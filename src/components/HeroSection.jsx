// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='mini'></div>
        <h1>Accelerate Innovation with Global AI Challenges</h1>
        <p>AI Challenges at DPhi simulate real-world problems. Put your AI/Data Science skills to the test on diverse datasets.</p>
        <button className="btn-primary">Create Challenge</button>
      </div>
      <div className="hero-image">
        {/* Replace with your hero image */}
        <img src="./PicsArt_04-14-04.42 1.svg" alt="Hero"/>
      </div>
    </section>
  );
};

export default HeroSection;