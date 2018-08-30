const calculateSpace = board => {
  const res = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 'O' && board[i] !== 'X') {
      res.push(i);
    }
  }

  return res;
};

const ComputerMove = (fields, compLabel) => {
  const board = fields;
  const freeSpace = calculateSpace(board);
  const model = board.slice();
  const moveHierarchy = [4, 0, 2, 6, 8, 1, 3, 5, 7];
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

  const correctedMoveHierarchy = [];
  moveHierarchy.forEach(num => {
    if (freeSpace.indexOf(num) !== -1) {
      correctedMoveHierarchy.push(num);
    }
  });

  const humanLabel = compLabel === 'X' ? 'O' : 'X';

  // проверка на 1 правило
  let res = '';
  freeSpace.forEach(cell => {
    model[cell] = compLabel;
    winCombos.forEach(combo => {
      if (
        model[combo[0]] === compLabel &&
        model[combo[1]] === compLabel &&
        model[combo[2]] === compLabel
      ) {
        res = cell;
      }
    });
    model[cell] = '-';
  });
  if (res !== '') {
    return res;
  }

  // проверка на 2 правило
  freeSpace.forEach(cell => {
    model[cell] = humanLabel;
    winCombos.forEach(combo => {
      if (
        model[combo[0]] === humanLabel &&
        model[combo[1]] === humanLabel &&
        model[combo[2]] === humanLabel
      ) {
        res = cell;
      }
    });
    model[cell] = '-';
  });

  if (res !== '') {
    return res;
  }

  // проверка на 3 правило
  if (
    model[0] === humanLabel &&
    model[8] === humanLabel &&
    model[4] === compLabel &&
    freeSpace.length === 6
  ) {
    return 1;
  } else if (
    model[2] === humanLabel &&
    model[6] === humanLabel &&
    model[4] === compLabel &&
    freeSpace.length === 6
  ) {
    return 3;
  }

  return correctedMoveHierarchy[0];
};

export default ComputerMove;
