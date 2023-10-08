import "./Roster.css"
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";

const Roster = () => {
  const navigate = useNavigate();

  const handleClick0 = () => {
    navigate("/");
  };

  const handleClick1 = () => {
    navigate("/1");
  };

  const handleClick2 = () => {
    navigate("/2");
  };

  const handleClick3 = () => {
    navigate("/3");
  };

  return (
    <div className="background">
        <div className="fire_title"> TODAY'S ROSTER </div>
<div className="image-container hover06 move-up_3 ">
    <div className="image-container-item">
    <img
        src={FighterData[0].image}
        alt={FighterData[0].name}
        onClick={handleClick0} />
        <p> {FighterData[0].name} </p>
     </div>
     <div className="image-container-item">
    <img
        src={FighterData[1].image}
        alt={FighterData[1].name}
        onClick={handleClick1}
    />
        <p> {FighterData[1].name} </p>
    </div>
    <div className="image-container-item">
    <img
        src={FighterData[2].image}
        alt={FighterData[2].name}
        onClick={handleClick2}
     />
        <p> {FighterData[2].name} </p>
     </div>
     <div className="image-container-item">
    <img
        src={FighterData[6].image}
        alt={FighterData[6].name}
        onClick={handleClick3}
    />
        <p> {FighterData[6].name} </p>
    </div>
</div>
</div>
  );
};

export default Roster;