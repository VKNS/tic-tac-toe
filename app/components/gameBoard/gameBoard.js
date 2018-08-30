import React from 'react';
import PropTypes from 'prop-types';
import './gameBoard.css';

import Cell from '../cell/cell';

const GameBoard = ({ cells, moveHandler }) => {
  const rows = [0, 1, 2];
  return (
    <div className="game-board">
      {rows.map(key => {
        const firstCellKey = key * 3;
        const secondCellKey = key * 3 + 1;
        const thirdCellKey = key * 3 + 2;
        return (
          <div className={`row-${key}`} key={`row-${key}`}>
            <Cell
              key={firstCellKey}
              label={cells[firstCellKey]}
              num={firstCellKey}
              moveHandler={moveHandler}
            />
            <Cell
              key={secondCellKey}
              label={cells[secondCellKey]}
              num={secondCellKey}
              moveHandler={moveHandler}
            />
            <Cell
              key={thirdCellKey}
              label={cells[thirdCellKey]}
              num={thirdCellKey}
              moveHandler={moveHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

GameBoard.propTypes = {
  cells: PropTypes.array.isRequired,
  moveHandler: PropTypes.func.isRequired,
};

export default GameBoard;

/*      {cells.map(cell => <Cell content={cell} />)} */
