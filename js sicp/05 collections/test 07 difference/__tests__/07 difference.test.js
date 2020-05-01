import difference from '../07 difference';

describe('Difference', () => {
  it('should works', () => {
    const result1 = difference([2, 1], [2, 3]);
    expect(result1).toEqual([1]);

    const result2 = difference([], [2, 3]);
    expect(result2).toEqual([]);

    const result3 = difference([2, 1], []);
    expect(result3).toEqual([2, 1]);

    const result4 = difference([2, 1, 1], []);
    expect(result4).toEqual([2, 1, 1]);

    const result5 = difference([2, 1, 1], [1]);
    expect(result5).toEqual([2]);

    const result6 = difference([3, 4, 3, 5, 2, 1, 1], [1, 2, 2, 5]);
    expect(result6).toEqual([3, 4, 3]);
  });
});
