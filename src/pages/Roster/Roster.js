import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";
import "./Roster.css";

const Roster = () => {
  const navigate = useNavigate();
  const [clickedFighter, setClickedFighter] = useState(null);

  const handleClick = (index) => {
    if (clickedFighter === null) {
      // First click, set the clicked fighter
      setClickedFighter(index);
      setTimeout(() => {
        navigate(`/${index}`);
      }, 1000); // Adjust the delay as needed
    } else if (clickedFighter === index) {
      // Clicked the same fighter again, reset
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
    </div>
  );
};

export default Roster;
