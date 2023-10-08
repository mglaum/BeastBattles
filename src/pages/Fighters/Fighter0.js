import "./Fighters.css"
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";

const Fighter0 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
<div></div>
  );
};

export default Fighter0;