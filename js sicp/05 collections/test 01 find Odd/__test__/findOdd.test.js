import findOdd from '../findOdd';

describe('HexletLinq', () => {
  it('numbers 1', () => {
    const numbers = [1, 2, 5, 2, 3, 5, 1, 7, 3];
    expect(findOdd(numbers)).toBe(7);
  });

  it('numbers 2', () => {
    const numbers = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
    expect(findOdd(numbers)).toBe(5);
  });

  it('numbers 3', () => {
    const numbers = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
    expect(findOdd(numbers)).toBe(-1);
  });
});
