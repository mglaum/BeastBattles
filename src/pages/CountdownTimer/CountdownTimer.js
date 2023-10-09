import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const db = firebase.database();
    const countdownRef = db.ref('liveCountdown');

    // Fetch initial countdown from Realtime Database
    countdownRef.on('value', (snapshot) => {
      const value = snapshot.val();
      if (value !== null) {
        setCountdown(value);
      }
    });

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 1000);

    // Check if it's time to reset the countdown (every :00 or :30)
    const resetInterval = setInterval(() => {
      const now = new Date();
      const minutes = now.getMinutes();

      if (minutes % 30 === 0 || minutes % 30 === 30) {
        countdownRef.set(30 * 60); // Reset countdown in the Realtime Database
      }
    }, 60 * 1000); // Check every minute

    return () => {
      clearInterval(countdownInterval);
      clearInterval(resetInterval);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <p>Live Countdown: {formatTime(countdown)}</p>
    </div>
  );
};

export default CountdownTimer;
