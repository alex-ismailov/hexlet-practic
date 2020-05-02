import intersection from '../intersection';

describe('Intersection', () => {
  it('should works', () => {
    const result = intersection([], []);
    expect(result).toEqual([]);

    const result2 = intersection([2, 1], [0, 5, 2]);
    expect(result2).toEqual([2]);

    const result3 = intersection([3, 1, 3], [3, 3, 2]);
    expect(result3).toEqual([3]);

    const result4 = intersection([2, 1, 2], [2, 3]);
    expect(result4).toEqual([2]);

    const result5 = intersection([10, 100, 0, 234, 'hello'], [234, 432, 10, 'str', 0]);
    expect(result5).toEqual([10, 0, 234]);

    const result6 = intersection(
      ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
      ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
    );
    expect(result6).toEqual(['kirill', 'rakhim', 'alex', 'dima']);
  });
});
