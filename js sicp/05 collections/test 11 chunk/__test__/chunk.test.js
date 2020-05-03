import chunk from '../chunk';

describe('Chunk', () => {
  it('should works', () => {
    const result1 = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result1).toEqual([['a', 'b'], ['c', 'd']]);

    const result2 = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result2).toEqual([['a', 'b', 'c'], ['d']]);

    const result3 = chunk([], 4);
    expect(result3).toEqual([]);

    const result4 = chunk(['a'], 2);
    expect(result4).toEqual([['a']]);

    const result5 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
    expect(result5).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
  });
});
