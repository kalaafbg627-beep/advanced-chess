import React from 'react';
import './MoveHistory.css';

function MoveHistory({ history }) {
  return (
    <div className='move-history'>
      <h2>Move History</h2>
      <ol>
        {history.map((move, idx) => (
          <li key={idx}>{move.from.join(',')} → {move.to.join(',')}</li>
        ))}
      </ol>
    </div>
  );
}

export default MoveHistory;