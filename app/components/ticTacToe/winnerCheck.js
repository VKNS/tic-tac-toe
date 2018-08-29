const WinnerCheck = board => {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombos.length; i++) {
    if (
      (board[winCombos[i][0]] === 'X' || board[winCombos[i][0]] === 'O') &&
      board[winCombos[i][0]] === board[winCombos[i][1]] &&
      board[winCombos[i][0]] === board[winCombos[i][2]]
    ) {
      return board[winCombos[i][0]];
    }
  }

  if (board.indexOf('k') === -1) {
    return 'ничья';
  }

  return false;
};

export default WinnerCheck;
