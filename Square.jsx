import React from 'react';
import './Square.css';

function Square({ piece, row, col, isSelected, isValidMove, onClick }) {
  const color = (row + col) % 2 === 0 ? 'white' : 'black';
  const highlight = isSelected ? 'selected' : isValidMove ? 'valid' : '';

  return (
    <div className={`square ${color} ${highlight}`} onClick={onClick}>
      {piece && <span className={`piece ${piece}`}>{piece}</span>}
    </div>
  );
}

export default Square;