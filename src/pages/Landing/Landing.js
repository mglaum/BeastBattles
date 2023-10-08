import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setFade(true); // Trigger the fade-out animation

    setTimeout(() => {
      navigate('/instructions'); // Navigate to the next page after the fade-out animation
    }, 500); // Adjust the duration to match your CSS animation duration
  };

  useEffect(() => {
    setFade(false); // Reset fade state on component mount
  }, []);

  return (
    <div className={`background ${fade ? 'fade-out' : ''}`}>
      <div className="fire">
        BEAST BATTLES
        <div>
          <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text" onClick={handleClick}>
              Fight
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
