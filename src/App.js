import React, { useState } from 'react';
import { FighterData } from './FighterData';
import './App.css'; // Import your App.css stylesheet

function App() {
  const [randomIndex, setRandomIndex] = useState(null);

  const getRandomIndex = () => {
    const newIndex = Math.floor(Math.random() * FighterData.length);
    setRandomIndex(newIndex);
  };

  return (
    <div className="container">
      <button onClick={getRandomIndex}>Get Random Fighter</button>
      {randomIndex !== null && (
        <div>
          <img
            src={FighterData[randomIndex].image.default}
            alt={FighterData[randomIndex].name}
          />
          <p>{FighterData[randomIndex].name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
