import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const CountdownTimer = () => {
  return (
    <div>
      Countdown timer
    </div>
  );
};

export default CountdownTimer;
