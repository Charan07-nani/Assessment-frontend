// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import Features from './components/Features';
import ChallengeCards from './components/ChallengeCards';
import Footer from './components/Footer';
import './styles.css';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Statistics />
      <Features />
      <ChallengeCards />
      <Footer />
    </div>
  );
};

export default App;