import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Roster.css";

const Roster = () => {
  const navigate = useNavigate();
  const [clickedFighter, setClickedFighter] = useState(null);

  const handleClick = (index) => {
    if (clickedFighter === null) {
      setClickedFighter(index);
      setTimeout(() => {
        navigate(`/${index}`);
      }, 1000); 
    } else if (clickedFighter === index) {
      setClickedFighter(null);
    }
  };

  return (
    <div className="background">
        <div className="fire_title"> TODAY'S ROSTER </div>
      <div className="image-container move-up_3">
        {FighterData.slice(0, 4).map((fighter, index) => (
          <div
            key={index}
            className={`image-container-item  ${
              clickedFighter !== null
                ? index <= 1
                  ? "left-leave"
                  : "right-leave"
                : ""
            }`}
          >
            <img
              src={fighter.image}
              alt={fighter.name}
              onClick={() => handleClick(index)}
            />
            <p>{fighter.name}</p>
          </div>
        ))}
      </div>
      <div>
        <CountdownTimer/>
      </div>
    </div>
  );
};

export default Roster;
