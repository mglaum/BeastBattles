import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import FighterGenerator from './FighterGenerator';
import { Route, Routes } from 'react-router-dom'; 
import Roster from './pages/Roster/Roster';
import Fighter1 from './pages/Fighters/Fighter1';
import firebaseConfig from './firebaseConfig';

import firebase from 'firebase/compat/app';  // Change this line
import 'firebase/compat/firestore';          // Change this line
import 'firebase/compat/auth';               // Change this line

firebase.initializeApp(firebaseConfig);

function App() {
  

  return (
    <Routes>
      <Route path='/' element={ <Landing/> } />
      <Route path='/test' element={ <FighterGenerator/> } />
      <Route path='/roster' element={<Roster/>} />
      <Route path='/1' element={<Fighter1/>} />
    </Routes>
    // <FighterGenerator/>
  );
}

export default App;
