import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import FighterGenerator from './FighterGenerator';
import { Route, Routes } from 'react-router-dom'; 
import Roster from './pages/Roster/Roster';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Landing/> } />
      <Route path='/test' element={ <FighterGenerator/> } />
      <Route path='/roster' element={<Roster/>} />
    </Routes>
    // <FighterGenerator/>
  );
}

export default App;
