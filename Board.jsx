import React, { useState } from 'react';
import Square from './Square';
import { initialBoard } from '../logic/chessRules';
import { getValidMoves } from '../logic/moveValidation';
import './Board.css';

function Board({ isWhiteTurn, onMove }) {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  const handleClick = (row, col) => {
    const piece = board[row][col];
    if (selected && validMoves.some(m => m[0] === row && m[1] === col)) {
      const newBoard = board.map(r => [...r]);
      newBoard[row][col] = board[selected[0]][selected[1]];
      newBoard[selected[0]][selected[1]] = null;
      setBoard(newBoard);
      setSelected(null);
      setValidMoves([]);
      onMove({from: selected, to: [row, col]});
    } else if (piece && ((isWhiteTurn && piece[0] === 'w') || (!isWhiteTurn && piece[0] === 'b'))) {
      setSelected([row, col]);
      setValidMoves(getValidMoves(board, row, col));
    } else {
      setSelected(null);
      setValidMoves([]);
    }
  };

  return (
    <div className='board'>
      {board.map((rowArr, rIdx) => (
        <div className='board-row' key={rIdx}>
          {rowArr.map((piece, cIdx) => (
            <Square
              key={cIdx}
              piece={piece}
              row={rIdx}
              col={cIdx}
              isSelected={selected && selected[0] === rIdx && selected[1] === cIdx}
              isValidMove={validMoves.some(m => m[0] === rIdx && m[1] === cIdx)}
              onClick={() => handleClick(rIdx, cIdx)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;