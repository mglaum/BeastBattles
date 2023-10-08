import "./Fighters.css"
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";
import ClickerApp from "../../ClickerApp";

const Fighter0 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
<div>
  <ClickerApp/>
</div>
  );
};

export default Fighter0;