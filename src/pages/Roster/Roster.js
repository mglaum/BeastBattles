import "./Roster.css"
import { useNavigate } from "react-router-dom";
import { FighterData } from "../../FighterData";

const Roster = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/roster");
  };

  return (
    <div className="background">
<div className="image-container">
    <div className="image-container-item">
    <img
        src={FighterData[0].image}
        alt={FighterData[0].name}
     />
        <p className="fire"> {FighterData[0].name} </p>
     </div>
     <div className="image-container-item">
    <img
        src={FighterData[1].image}
        alt={FighterData[1].name}
    />
        <p> {FighterData[1].name} </p>
    </div>
    <div className="image-container-item">
    <img
        src={FighterData[2].image}
        alt={FighterData[2].name}
     />
        <p> {FighterData[2].name} </p>
     </div>
     <div className="image-container-item">
    <img
        src={FighterData[3].image}
        alt={FighterData[3].name}
    />
        <p> {FighterData[3].name} </p>
    </div>
</div>
</div>
  );
};

export default Roster;



  
  {/* <div class="col-md-3 contact-card">
    <img
      alt="UF WiCSE Vice-President Vy Vu"
      src="../assets/img/eboard/2023-2024/vy_vu.jpeg"
      class="w-100"
    />
    <div>
      <p class="contact-title">Vice-President</p>
      <p>Computer Science </p>
      <a href="https://www.linkedin.com/in/vyvudb/"
      target="_blank"
      class="contact-name"
        ><i class="fab fa-linkedin"></i> Vy Vu</a
      ><br />
      <a class="contact-email" href="mailto:uf.wicse.vp@gmail.com"
        ><i class="fas fa-envelope-square"></i> Contact via email</a
      >
    </div>
  </div>
  <div class="col-md-3 contact-card">
    <img
      alt="UF WiCSE Treasurer Katja Karoleski"
      src="../assets/img/eboard/2022-2023/katja_karoleski.jpg"
      class="w-100"
    />
    <div>
      <p class="contact-title">Treasurer</p>
      <p>Computer Science</p>
      <a
        href="https://www.linkedin.com/in/katja-karoleski-149044171/"
        target="_blank"
        class="contact-name"
        ><i class="fab fa-linkedin"></i> Katja Karoleski</a
      ><br />
      <a class="contact-email" href="mailto:uf.wicse.treasurer@gmail.com"
        ><i class="fas fa-envelope-square"></i> Contact via email</a
      >
    </div>
  </div>
  <div class="col-md-3 contact-card">
    <img
      alt="UF WiCSE Secretary Ananya Sista"
      src="../assets/img/eboard/2023-2024/ananya_sista.jpeg"
      class="w-100"
    />
    <div>
      <p class="contact-title">Secretary</p>
      <p>Computer Science and Economics</p>
      <a
        href="https://www.linkedin.com/in/ananya-sista-573b54251/"
        target="_blank"
        class="contact-name"
        ><i class="fab fa-linkedin"></i> Ananya Sista</a
      ><br />
      <a class="contact-email" href="mailto:uf.wicse.secretary@gmail.com"
        ><i class="fas fa-envelope-square"></i> Contact via email</a
      >
    </div>
  </div> */}



