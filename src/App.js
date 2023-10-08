import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import FighterGenerator from './FighterGenerator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Roster from './pages/Roster/Roster';
import Fighter0 from "./pages/Fighters/Fighter0";

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Landing/> } />
      <Route path='/test' element={ <FighterGenerator/> } />
      <Route path='/roster' element={<Roster/>} />
      <Route path="/:id" element={<Fighter0 />} /> {/* Updated route */}
    </Routes>
    // <FighterGenerator/>
  );
}

export default App;
