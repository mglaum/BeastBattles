import React from "react";
import { FighterData } from "../../FighterData";
import { useParams } from "react-router-dom";
import "./Fighters.css";

const Fighter0 = () => {
  const { id } = useParams();
  const fighter = FighterData[id];

  if (!fighter) {
    return <div>Fighter not found</div>;
  }

  return (
    <div className="fighter-page">
      <div className="fighter-details">
        <div className="fighter-image">
          <img src={fighter.image} alt={fighter.name} className="zoom-in" />
        </div>
        <div className="fighter-name">
          <p>{fighter.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Fighter0;
