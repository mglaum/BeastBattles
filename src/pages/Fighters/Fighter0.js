import { FighterData } from "../../FighterData";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebaseConfig from '../../firebaseConfig';

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


    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 1000);

    // Check if it's time to reset the count (every 30 minutes)
    const resetInterval = setInterval(() => {
      clicksRef.update({
        count: 0,
      });
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Fetch initial click count
    const unsubscribe = clicksRef.onSnapshot((doc) => {
      if (doc.exists) {
        setClickCount(doc.data().count);
      }
    });

    return () => {
      clearInterval(countdownInterval);
      clearInterval(resetInterval);
      unsubscribe();
    };
  }, []);

  const handleButtonClick = () => {
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

    // Increment click count
    clicksRef.update({
      count: firebase.firestore.FieldValue.increment(1),
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }; 

  return (
    <div className="fighter-page">
      <div className="fighter-details">
        <div className="fighter-image">
          <img src={fighter.image} alt={fighter.name} className="zoom-in" />
        </div>
        <div className="fighter-name">
          <p>{fighter.name}</p>
        </div>
        <div>
        <p>Click Count: {clickCount}</p>
        <p>Countdown: {formatTime(countdown)}</p>
        <button onClick={handleButtonClick}>Click me!</button>
      </div>
      </div>
    </div>
  );
};
export default Fighter0;
