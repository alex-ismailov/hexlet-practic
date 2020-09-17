// import 'js-polyfills/html';
// import 'js-polyfills/dom';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/application.js';

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
  const [button1, button2] = document.querySelectorAll('[data-toggle="modal"]');
  const [closeButton1, closeButton2] = document.querySelectorAll('[data-dismiss="modal"]');

  expect(getTree()).toMatchSnapshot();

  button1.click();
  expect(getTree()).toMatchSnapshot();

  closeButton1.click();
  expect(getTree()).toMatchSnapshot();

  button2.click();
  expect(getTree()).toMatchSnapshot();

  closeButton2.click();
  expect(getTree()).toMatchSnapshot();
});
