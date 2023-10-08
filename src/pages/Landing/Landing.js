import "./Landing.css"
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/test");
    navigate("/roster"); 
  };

  return (
    <div className="background">
     <div className="fire"> 
        BEAST BATTLES 
        <div>
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
           <span class="button-82-front text" onClick={handleClick}>
            Fight
          </span>
          </button>
      </div>
      </div>


     </div>
     
  
  );
};

export default Landing;
