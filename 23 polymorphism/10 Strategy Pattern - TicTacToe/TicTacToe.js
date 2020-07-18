/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */

import Easy from './strategies/Easy.js';
import Normal from './strategies/Normal.js';

class TicTacToe {
  // BEGIN (write your solution here)
  static strategies = {
    easy: new Easy(),
    normal: new Normal(),
  };

  static isWinnerMove = (gameField) => {
    // По горизонтали
    if ((gameField[0][0] === 'X' && gameField[0][1] === 'X' && gameField[0][2] === 'X')
        || (gameField[0][0] === 'O' && gameField[0][1] === 'O' && gameField[0][2] === 'O')) {
      return true;
    }
    if ((gameField[1][0] === 'X' && gameField[1][1] === 'X' && gameField[1][2] === 'X')
        || (gameField[1][0] === 'O' && gameField[1][1] === 'O' && gameField[1][2] === 'O')) {
      return true;
    }
    if ((gameField[2][0] === 'X' && gameField[2][1] === 'X' && gameField[2][2] === 'X')
        || (gameField[2][0] === 'O' && gameField[2][1] === 'O' && gameField[2][2] === 'O')) {
      return true;
    }
    // По вертикали
    if ((gameField[0][0] === 'X' && gameField[1][0] === 'X' && gameField[2][0] === 'X')
        || (gameField[0][0] === 'O' && gameField[1][0] === 'O' && gameField[2][0] === 'O')) {
      return true;
    }
    if ((gameField[0][1] === 'X' && gameField[1][1] === 'X' && gameField[2][1] === 'X')
        || (gameField[0][1] === 'O' && gameField[1][1] === 'O' && gameField[2][1] === 'O')) {
      return true;
    }
    if ((gameField[0][2] === 'X' && gameField[1][2] === 'X' && gameField[2][2] === 'X')
        || (gameField[0][2] === 'O' && gameField[1][2] === 'O' && gameField[2][2] === 'O')) {
      return true;
    }
    // По горизонтали
    if ((gameField[0][0] === 'X' && gameField[1][1] === 'X' && gameField[2][2] === 'X')
        || (gameField[0][0] === 'O' && gameField[1][1] === 'O' && gameField[2][2] === 'O')) {
      return true;
    }
    if ((gameField[0][2] === 'X' && gameField[1][1] === 'X' && gameField[2][0] === 'X')
        || (gameField[0][2] === 'O' && gameField[1][1] === 'O' && gameField[2][0] === 'O')) {
      return true;
    }
    return false;
  };

  constructor(level = 'easy') {
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.strategy = TicTacToe.strategies[level];
  }
  go(row = null, cell = null) {
    if (row === null || cell === null) {
      const [aiRow, aiCell] = this.strategy.getCoordinates(this.gameField);
      this.gameField[aiRow][aiCell] = 'O';
    } else {
      this.gameField[row][cell] = 'X';
    }
    return TicTacToe.isWinnerMove(this.gameField);
  }
  // END
}

export default TicTacToe;
