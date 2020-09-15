import countWords from '../words.js';

test('countWords 1', () => {
  const text = '';
  const expected = {};
  expect(countWords(text)).toEqual(expected);
});

test('countWords 2', () => {
  const text = 'one two three two ONE one wow';
  const expected = {
    one: 3,
    two: 2,
    three: 1,
    wow: 1,
  };
  expect(countWords(text)).toEqual(expected);
});

test('countWords 3', () => {
  const text = 'another one sentence with strange Words words';
  const expected = {
    another: 1,
    one: 1,
    sentence: 1,
    with: 1,
    strange: 1,
    words: 2,
  };
  expect(countWords(text)).toEqual(expected);
});
