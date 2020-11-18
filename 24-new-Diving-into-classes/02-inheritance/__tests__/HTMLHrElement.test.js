import HTMLHrElement from '../HTMLHrElement.js';

test('HTMLHrElement', () => {
  const hr = new HTMLHrElement();
  const expected = '<hr>';
  expect(hr.toString()).toEqual(expected);

  const hr2 = new HTMLHrElement({ class: 'w-75', id: 'wop' });
  const expected2 = '<hr class="w-75" id="wop">';
  expect(hr2.toString()).toEqual(expected2);
});
