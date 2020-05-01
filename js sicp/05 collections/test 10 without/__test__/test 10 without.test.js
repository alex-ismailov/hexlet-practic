import without from '../test 10 without';

describe('Without', () => {
  it('should works', () => {
    const result = without([], 1, 2, 5);
    expect(result).toEqual([]);

    const result1 = without([2, 1, 2, 3], 1, 2, 5);
    expect(result1).toEqual([3]);

    const result2 = without([10, 'str', -3, 'world', 'hello', ''], 'hello', -3);
    expect(result2).toEqual([10, 'str', 'world', '']);
  });
});
