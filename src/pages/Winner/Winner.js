import { FighterData } from "../../FighterData";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebaseConfig from '../../firebaseConfig';
import CountdownTimer from "../CountdownTimer/CountdownTimer";

import firebase from 'firebase/compat/app';  
import 'firebase/compat/database';
import 'firebase/compat/firestore';          
import 'firebase/compat/auth';   

const Winner = () => {
  const { id } = useParams();
  const fighter = FighterData[id];
  const [clickCount, setClickCount] = useState(0);
  const [countdown, setCountdown] = useState(30 * 60); // Initial countdown: 30 minutes
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [maxData, setMaxData] = useState({ max: null, maxIndex: null });

  const handleBackClick = () => {
    navigate("/roster"); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();

      try {
        const count0 = await db.collection('clicks0').doc('vO3ehChDDhpawJR93gZW').get();
        const count1 = await db.collection('clicks1').doc('eTZTZoLjTGfQGF8JAVmM').get();
        const count2 = await db.collection('clicks2').doc('RBXhoi4L688oIywFUZrn').get();
        const count3 = await db.collection('clicks3').doc('MmZ3jZW3Afpr63DgDsT2').get();

        const countValues = [
          count0.exists ? count0.data().count : 0,
          count1.exists ? count1.data().count : 0,
          count2.exists ? count2.data().count : 0,
          count3.exists ? count3.data().count : 0,
        ];

        const max = Math.max(...countValues);
        const maxIndex = countValues.indexOf(max);

        setMaxData({ max, maxIndex });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>winner: {maxData.max}</p>
      <p>Index of winner: {maxData.maxIndex}</p>
    </div>
  );
};

export default Winner;
