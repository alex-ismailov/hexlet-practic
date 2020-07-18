/* eslint-disable class-methods-use-this */

class Easy {
  // BEGIN (write your solution here)
  getCoordinates(gameField) {
    for (let row = 0; row < gameField.length; row += 1) {
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

export default Easy;
