export function getValidMoves(board, row, col) {
  const piece = board[row][col];
  if (!piece) return [];
  const moves = [];
  // Simplified example: pawns only forward
  if (piece[1] === 'P') {
    const dir = piece[0] === 'w' ? -1 : 1;
    const nextRow = row + dir;
    if (board[nextRow] && !board[nextRow][col]) moves.push([nextRow, col]);
  }
  // More rules can be added for full chess logic
  return moves;
}