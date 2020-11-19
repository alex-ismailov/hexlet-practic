import HTMLDivElement from '../HTMLDivElement.js';

test('without params', () => {
  const expected = '<div></div>';
  const div = new HTMLDivElement();
  expect(`${div}`).toEqual(expected);
});

test('with params', () => {
  const expected = '<div class="w-75" id="wop"></div>';
  const div = new HTMLDivElement({ class: 'w-75', id: 'wop' });
  expect(`${div}`).toEqual(expected);
});

test('with params and context', () => {
  const expected = '<div name="div" data-toggle="true">Body</div>';
  const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
  div.setTextContent('Body');
  expect(`${div}`).toEqual(expected);
});
