/* eslint-disable class-methods-use-this */

class Easy {
  // BEGIN (write your solution here)
  getCoordinates(gameField) {
    return gameField.reduce((acc, row, rowIndex) => {
      const cellIndex = row.indexOf(null);
      if (acc.length === 0 && cellIndex !== -1) {
        return [rowIndex, cellIndex];
      }
      return acc;
    }, []);
  }
  // END
}

export default Easy;
