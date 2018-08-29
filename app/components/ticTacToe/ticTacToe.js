import React from 'react';
import './ticTacToe.css';

import GameBoard from '../gameBoard/gameBoard';
import WinnerCheck from './winnerCheck';

class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      cells: Array(9).fill('k'),
      xMove: true,
      winner: '',
    };
  }

  changeCells = id => {
    const copyState = this.state.cells.slice();
    copyState[id] = this.state.xMove === true ? 'X' : 'O';
    return copyState;
  };

  moveHandler = id => {
    if (this.state.cells[id] === 'k') {
      const newCells = this.changeCells(id);
      const result = WinnerCheck(newCells);

      this.setState({
        cells: this.changeCells(id),
        xMove: !this.state.xMove,
        winner: result ? result : this.state.winner, // ???????????????
      });
    }
  };

  newGameHandler = () => {
    this.setState({
      cells: Array(9).fill('k'),
      xMove: true,
      winner: '',
    });
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <GameBoard
          cells={this.state.cells}
          moveHandler={id => this.moveHandler(id)}
        />

        <button className="new-game-button" onClick={this.newGameHandler}>
          New Game
        </button>

        <h2>
          {this.state.winner !== ''
            ? `Победитель: ${this.state.winner}`
            : `Чей ход: ${this.state.xMove ? 'X' : 'O'}`}
        </h2>
      </div>
    );
  }
}

export default TicTacToe;
