import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Instructions.css';

const Instructions = () => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setFade(true); // Trigger the fade-out animation

    setTimeout(() => {
      navigate('/roster'); // Navigate to the next page after the fade-out animation
    }, 500); // Adjust the duration to match your CSS animation duration
  };

  useEffect(() => {
    setFade(false); // Reset fade state on component mount
  }, []);

  return (
    <div className={`background ${fade ? 'fade-out' : ''}`}>
      <div className="fire_instr">
        WELCOME TO BEAST BATTLES! <p></p>
        </div>
        
        <div className='text-block'>
            <p>Every day, champions from around the world come from far and wide to compete in the world-renowned BEAST BATTLES. 
            Though ferocious, these fighters cannot win alone. They need your help to find the strength to overpower their 
            opponents. <p></p>
            Click on one of today's fighters and click their "strengthen" button to lend them your strength. Fights conclude every 30 minutes; whoever
            is the strongest will win!
            </p>
        </div>
        <div className='button-pos'>
          <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text" onClick={handleClick}>
              Let's Go
            </span>
          </button>
        </div>
      </div>
  );
};

export default Instructions;
