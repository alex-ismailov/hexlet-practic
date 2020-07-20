import solution from '../solution';

test('solution 1', () => {
  const data = [
    '  first second\n',
    'hello  my\n',
    'what   who   \n\n',
  ];

  const expected = [
    'first',
    'hello',
    'what',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});

test('solution 2', () => {
  const data = [
    '\n\n  what who   \n',
    'hellomy\n',
    ' hello who are you\n',
  ];

  const expected = [
    'what',
    'hellomy',
    'hello',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});

test('solution 3', () => {
  const data = [
    '\n\n  hi   \n',
    'hey how are you doing?\n',
    ' hello who are you',
  ];

  const expected = [
    'hi',
    'hey',
    'hello',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});

test('solution 4', () => {
  const data = [
    '\n\n  hi   \n',
    'hi how are you doing?\n',
    ' hello who are you',
  ];

  const expected = [
    'hi',
    'hi',
    'hello',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});

test('solution 5', () => {
  const data = [
    '\n\n  hi   \n',
    'hi how are you doing?\n',
    ' hello',
  ];

  const expected = [
    'hi',
    'hi',
    'hello',
  ];

  expect(solution(data.join(''))).toEqual(expected);
});
