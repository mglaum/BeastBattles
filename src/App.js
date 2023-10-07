import React, { useState } from 'react';
import { FighterData } from './FighterData';
import './App.css';

function App() {
  const [randomIndices, setRandomIndices] = useState([]);
  
  // Function to generate two unique random indices
  const getRandomIndices = () => {
    const indices = [];
    while (indices.length < 2) {
      const newIndex = Math.floor(Math.random() * FighterData.length);
      if (!indices.includes(newIndex)) {
        indices.push(newIndex);
      }
    }
    setRandomIndices(indices);
  };

  return (
    <div className="container">
      <button onClick={getRandomIndices}>Pick Two Random Fighters</button>
      {randomIndices.length === 2 && (
        <div className="fighter-container">
          {randomIndices.map((index) => (
            <div key={index}>
              <img
                src={FighterData[index].image}
                alt={FighterData[index].name}
                className="fighter-image"
              />
              <p className="fighter-name">{FighterData[index].name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
