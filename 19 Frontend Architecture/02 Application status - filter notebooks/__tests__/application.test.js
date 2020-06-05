import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import keycode from 'keycode';

import run from '../src/application.js';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

const pressKey = (key, el = document.body, value = key) => {
  const keyCode = keycode(key);
  const e = new KeyboardEvent('input', { keyCode, bubbles: true });
  el.value = value; // eslint-disable-line
  el.setAttribute('value', value);
  el.dispatchEvent(e);
};

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join(fixturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', async () => {
  expect(getTree()).toMatchSnapshot();

  const frequencyMin = document.querySelector('input[name="frequency_gte"]');
  frequencyMin.focus();
  pressKey('3', frequencyMin);
  expect(getTree()).toMatchSnapshot();

  pressKey('Backspace', frequencyMin, '');
  expect(getTree()).toMatchSnapshot();

  pressKey('4', frequencyMin);
  expect(getTree()).toMatchSnapshot();

  pressKey('1', frequencyMin);
  expect(getTree()).toMatchSnapshot();

  const frequencyMax = document.querySelector('input[name="frequency_lte"]');
  pressKey('Backspace', frequencyMax, '');
  expect(getTree()).toMatchSnapshot();

  pressKey('2', frequencyMax);
  expect(getTree()).toMatchSnapshot();
});

test('application 2', async () => {
  expect(getTree()).toMatchSnapshot();
});
