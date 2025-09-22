import React, { useState } from 'react';
import Board from './components/Board';
import MoveHistory from './components/MoveHistory';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);

  const handleMove = (move) => {
    setHistory([...history, move]);
    setIsWhiteTurn(!isWhiteTurn);
  };

  return (
    <div className='app'>
      <h1>Advanced Chess</h1>
      <Board isWhiteTurn={isWhiteTurn} onMove={handleMove} />
      <MoveHistory history={history} />
    </div>
  );
}

export default App;