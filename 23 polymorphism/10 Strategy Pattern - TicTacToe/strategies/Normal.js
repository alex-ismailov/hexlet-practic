/* eslint-disable class-methods-use-this */

class Normal {
  // BEGIN (write your solution here)
  getCoordinates(gameField) {
    for (let row = gameField.length - 1; row >= 0; row -= 1) {
      for (let cell = 0; cell < gameField[row].length; cell += 1) {
        if (gameField[row][cell] === null) {
          return [row, cell];
        }
      }
    }
    return false;
  }
  // END
}

export default Normal;
