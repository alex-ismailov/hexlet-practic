import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/application.js';

jest.useFakeTimers();

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  expect(getTree()).toMatchSnapshot();

  for (let i = 0; i < 105; i += 1) {
    jest.runOnlyPendingTimers();
    expect(getTree()).toMatchSnapshot();
  }
});
