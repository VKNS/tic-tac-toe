import React from 'react';
import PropTypes from 'prop-types';
import './gameBoard.css';

import Cell from '../cell/cell';

const GameBoard = ({ cells, moveHandler }) => {
  return (
    <div className="game-board">
      {[0, 1, 2].map(key => (
        <div className={`row-${key}`} key={`row-${key}`}>
          <Cell
            key={key * 3}
            label={cells[key * 3]}
            num={key * 3}
            moveHandler={moveHandler}
          />
          <Cell
            key={key * 3 + 1}
            label={cells[key * 3 + 1]}
            num={key * 3 + 1}
            moveHandler={moveHandler}
          />
          <Cell
            key={key * 3 + 2}
            label={cells[key * 3 + 2]}
            num={key * 3 + 2}
            moveHandler={moveHandler}
          />
        </div>
      ))}
    </div>
  );
};

GameBoard.propTypes = {
  cells: PropTypes.array.isRequired,
  moveHandler: PropTypes.func.isRequired,
};

export default GameBoard;

/*      {cells.map(cell => <Cell content={cell} />)} */
