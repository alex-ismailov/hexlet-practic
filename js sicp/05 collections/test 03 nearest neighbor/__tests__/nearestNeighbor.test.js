import findIndexOfNearest from '../nearestNeighbor';

it('findIndexOfNearest', () => {
  expect(findIndexOfNearest([], 2)).toBeNull();
  expect(findIndexOfNearest([10], 0)).toBe(0);
  expect(findIndexOfNearest([10, 15], 0)).toBe(0);
  expect(findIndexOfNearest([15, 10], 0)).toBe(1);
  expect(findIndexOfNearest([15, 10], 12)).toBe(1);
  expect(findIndexOfNearest([15, 10, 3, 4], 0)).toBe(2);
  expect(findIndexOfNearest([7, 5, 3, 2], 4)).toBe(1);
  expect(findIndexOfNearest([7, 5, 4, 4, 3, 6], 4)).toBe(2);
});
