import { FighterData } from "../../FighterData";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebaseConfig from '../../firebaseConfig';
import CountdownTimer from "../CountdownTimer/CountdownTimer";

import firebase from 'firebase/compat/app';  
import 'firebase/compat/database';
import 'firebase/compat/firestore';          
import 'firebase/compat/auth';   
import "./Fighters.css";

const Fighter0 = () => {
  const { id } = useParams();
  const fighter = FighterData[id];
  const [clickCount, setClickCount] = useState(0);
  const [countdown, setCountdown] = useState(30 * 60); // Initial countdown: 30 minutes
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false); 

  const handleBackClick = () => {
    navigate("/roster"); 
  };

  const handleButtonClick = () => {
    setIsAnimating(!isAnimating); 
    const db = firebase.firestore();
    let clicksRef; 
    if (id == 0) {
      clicksRef = db.collection('clicks0').doc('vO3ehChDDhpawJR93gZW'); 
     }
     else if (id == 1) {
       clicksRef = db.collection('clicks1').doc('eTZTZoLjTGfQGF8JAVmM');
     }
     else if (id == 2) {
       clicksRef = db.collection('clicks2').doc('RBXhoi4L688oIywFUZrn');
     }
     else if (id == 3) {
       clicksRef = db.collection('clicks3').doc('MmZ3jZW3Afpr63DgDsT2');
     }
    clicksRef.update({
      count: firebase.firestore.FieldValue.increment(1),
    });
    
  };


  useEffect(() => {
    if (!fighter) {
      return; // Early return if fighter is not available
    }

    const db = firebase.firestore();
    let clicksRef; 
    if (id == 0) {
     clicksRef = db.collection('clicks0').doc('vO3ehChDDhpawJR93gZW'); 
    }
    else if (id == 1) {
      clicksRef = db.collection('clicks1').doc('eTZTZoLjTGfQGF8JAVmM');
    }
    else if (id == 2) {
      clicksRef = db.collection('clicks2').doc('RBXhoi4L688oIywFUZrn');
    }
    else if (id == 3) {
      clicksRef = db.collection('clicks3').doc('MmZ3jZW3Afpr63DgDsT2');
    }

    // Fetch initial click count
    const unsubscribe = clicksRef.onSnapshot((doc) => {
      if (doc.exists) {
        setClickCount(doc.data().count);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }; 

  return (
    <div className="fighter-page">
      <div className="back-button">
            <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text" onClick={handleBackClick}>
              Back
            </span>
          </button>
          </div>
      <div className="fighter-details">
        <div className="fighter-image-zoom">
          <img 
            src={fighter.image} 
            alt={fighter.name} 
            />
        </div>
        <div className="fighter-name">
          <p>{fighter.name}</p>
        </div>
          {/* <p className="countdown">Countdown: {formatTime(countdown)}</p> */}
          <div className="strengthen-button">
          <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text" onClick={handleButtonClick}>
              Strengthen
            </span>
          </button>
          </div>
        <div className="click-info">
          <p className="click-count">Strength: {clickCount}</p>
        </div>
      </div>
    </div>
  );
};
export default Fighter0;