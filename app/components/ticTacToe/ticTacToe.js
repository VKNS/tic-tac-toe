import React from 'react';
import './ticTacToe.css';

import GameBoard from '../gameBoard/gameBoard';
import WinnerCheck from './supportFunctions/winnerCheck';
import ComputerMove from './supportFunctions/computerMove';

class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      cells: Array(9).fill('-'),
      xMove: true,
      winner: '',
      againstAi: false,
    };
  }

  changeMode = () => {
    this.setState({
      againstAi: !this.state.againstAi,
      cells: Array(9).fill('-'),
      xMove: true,
    });
  };

  newGameHandler = () => {
    this.setState({
      cells: Array(9).fill('-'),
      xMove: true,
      winner: '',
    });
  };

  changeCells = (id, xMove, board = this.state.cells) => {
    const copyState = board.slice();
    copyState[id] = xMove === true ? 'X' : 'O';
    return copyState;
  };

  moveHandler = id => {
    if (this.state.cells[id] === '-' && this.state.winner === '') {
      const changedBoard = this.changeCells(id, this.state.xMove);
      const checkWinner = WinnerCheck(changedBoard);

      this.setState({
        cells: changedBoard,
        xMove: !this.state.xMove,
        winner: checkWinner || this.state.winner,
      });
    }
  };

  moveHandlerWithAi = id => {
    if (this.state.cells[id] === '-' && this.state.winner === '') {
      const boardAfterHumanMove = this.changeCells(id, this.state.xMove);
      const checkWinner = WinnerCheck(boardAfterHumanMove);
      if (checkWinner) {
        this.setState({
          cells: boardAfterHumanMove,
          xMove: !this.state.xMove,
          winner: checkWinner || this.state.winner,
        });
      } else {
        const computerMove = ComputerMove(boardAfterHumanMove, 'O');
        const boardAfterComputerMove = this.changeCells(
          computerMove,
          !this.state.xMove,
          boardAfterHumanMove,
        );
        const checkWinnerAgain = WinnerCheck(boardAfterComputerMove);
        this.setState({
          cells: boardAfterComputerMove,
          xMove: this.state.xMove,
          winner: checkWinnerAgain || this.state.winner,
        });
      }
    }
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <button className="change-mode-button" onClick={this.changeMode}>
          {this.state.againstAi ? 'ИГРА ПРОТИВ AI' : 'РЕЖИМ ДЛЯ ДВУХ ИГРОКОВ'}
        </button>

        <button className="new-game-button" onClick={this.newGameHandler}>
          НОВАЯ ИГРА
        </button>

        <GameBoard
          cells={this.state.cells}
          moveHandler={id =>
            this.state.againstAi
              ? this.moveHandler(id)
              : this.moveHandlerWithAi(id)
          }
        />
        <div className="whos-move">
          {this.state.winner !== ''
            ? `ПОБЕДИТЕЛЬ: ${this.state.winner}`
            : `ЧЕЙ ХОД: ${this.state.xMove ? 'X' : 'O'}`}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
