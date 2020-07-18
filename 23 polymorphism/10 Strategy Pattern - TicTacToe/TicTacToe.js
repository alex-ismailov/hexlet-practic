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

  constructor(level = 'easy') {
    this.gameField = [
      Array(3).fill(null),
      Array(3).fill(null),
      Array(3).fill(null),
    ];
    
    this.strategy = TicTacToe.strategies[level];
  }

  go(row = null, cell = null) {
    if (row === null || cell === null) {
      const [aiRow, aiCell] = this.strategy.getCoordinates(this.gameField);
      this.gameField[aiRow][aiCell] = 'AI';
      return this.isWinnerMove('AI');
    }

    this.gameField[row][cell] = 'Player';
    return this.isWinnerMove('Player');
  }

  isWinnerMove(type) {
    // По горизонтали
    if (this.gameField.find((row) => this.isAllCellsMarked(row, type))) {
      return true;
    }

    // Вертикали
    for (let cellIndex = 0; cellIndex < 3; cellIndex += 1) {
      if (this.isAllCellsMarked(this.gameField.map((row) => row[cellIndex]), type)) {
        return true;
      }
    }

    // Диагональ в.л.у -> н.п.у
    const diagonal1 = [this.gameField[0][0], this.gameField[1][1], this.gameField[2][2]];
    if (this.isAllCellsMarked(diagonal1, type)) {
      return true;
    }

    // Диагональ н.л.у -> в.п.у
    const diagonal2 = [this.gameField[2][0], this.gameField[1][1], this.gameField[0][2]];
    if (this.isAllCellsMarked(diagonal2, type)) {
      return true;
    }

    return false;
  }

  isAllCellsMarked(row, type) {
    return row.every((cell) => cell === type);
  }
  // END
}

export default TicTacToe;
