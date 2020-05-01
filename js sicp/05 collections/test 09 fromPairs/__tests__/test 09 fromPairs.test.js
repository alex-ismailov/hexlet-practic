import fromPairs from '../test 09 fromPairs';

test('fromPairs', () => {
  const result1 = fromPairs([['fred', 30], ['barney', 40]]);
  expect(result1).toEqual({ fred: 30, barney: 40 });

  const result2 = fromPairs([['cat', 5], ['dog', 6], ['bird', 10]]);
  expect(result2).toEqual({ cat: 5, dog: 6, bird: 10 });

  const result3 = fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]);
  expect(result3).toEqual({ cat: 11, dog: 6 });
});
