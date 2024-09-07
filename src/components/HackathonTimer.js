import React, { useState, useEffect, useCallback } from 'react';

const HackathonTimer = ({ endTime, startTime }) => {
  // Define calculateTimeLeft as a stable function using useCallback
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const start = new Date(startTime).getTime();
    let timeLeft = null;

    if (now < start) {
      timeLeft = start - now;
    } else if (now < end) {
      timeLeft = end - now;
    } else {
      timeLeft = 0;
    }

    return timeLeft;
  }, [endTime, startTime]);

  // Initialize state inside useEffect
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update timeLeft every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // If timeLeft is 0 or less, indicate that the hackathon has ended
  if (timeLeft <= 0) return <p>Hackathon has ended.</p>;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div>
      <p>Time left: {`${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
};

export default HackathonTimer;
