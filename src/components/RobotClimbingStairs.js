// RobotAnimation.js
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import CSS file for styling

const RobotClimbingStairs = ({ score }) => {
  const [position, setPosition] = useState(0); // Starting position from the middle
  const distance = (score - 1) * 5; // Calculate the distance based on score

  useEffect(() => {
    const animateRobot = () => {
      if (position < distance) {
        setTimeout(() => {
          setPosition(position + 1); // Increment by 1 percent for smoother movement
        }, 100); // Adjust timeout for animation speed
      }
    };

    animateRobot();

    // Clean up function
    return () => {
      clearTimeout(animateRobot);
    };
  }, [position, distance]);

  return (
    <div>
      <div className="saucer" style={{ left: `${20 + position}%`, zIndex: 1 }}>
        <h2>🛸</h2>
      </div>
      <span className="robot" style={{ left: `${65}%`, zIndex: 1 }}>
        <h2>🤖</h2>
      </span>
    </div>
  );
};

export default RobotClimbingStairs;
