import normalize from '../normalize.js';

test('normalize 1', () => {
  const expected = '<p class="row">Text</p>';
  document.documentElement.innerHTML = expected;
  normalize(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('normalize 2', () => {
  const expected = '<p class="rowHowAre">Text</p>';
  document.documentElement.innerHTML = '<p class="row-how-are">Text</p>';
  normalize(document);
  expect(document.body.innerHTML).toEqual(expected);
});

test('normalize 3', () => {
  const expected = '<p class="row tCen"><span class="aB dG catDog">Text</span></p>';
  document.documentElement.innerHTML = '<p class="row t-cen"><span class="aB d-g cat-dog">Text</span></p>';
  normalize(document);
  expect(document.body.innerHTML).toEqual(expected);
});
