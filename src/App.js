import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import FighterGenerator from './FighterGenerator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Roster from './pages/Roster/Roster';
import Fighter1 from './pages/Fighters/Fighter1';
import firebaseConfig from './firebaseConfig';

import firebase from 'firebase/compat/app';  // Change this line
import 'firebase/compat/firestore';          // Change this line
import 'firebase/compat/auth';               // Change this line
import Fighter0 from "./pages/Fighters/Fighter0";

firebase.initializeApp(firebaseConfig);


function App() {
  

  return (
    <Routes>
      <Route path='/' element={ <Landing/> } />
      <Route path='/test' element={ <FighterGenerator/> } />
      <Route path='/roster' element={<Roster/>} />
      <Route path='/1' element={<Fighter1/>} />
      <Route path="/:id" element={<Fighter0 />} /> {/* Updated route */}
    </Routes>
    // <FighterGenerator/>
  );
}

export default App;
