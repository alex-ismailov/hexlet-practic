import fs from 'fs';
import path from 'path';
import { html } from 'js-beautify';

import run from '../src/application.js';

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const element = document.querySelector('a[href="#profile"]');
  element.click();
  expect(getTree()).toMatchSnapshot();

  const element2 = document.querySelector('a[href="#settings"]');
  element2.click();
  expect(getTree()).toMatchSnapshot();

  const element3 = document.querySelector('a[href="#profile"]');
  element3.click();
  expect(getTree()).toMatchSnapshot();

  const element4 = document.querySelector('a[href="#profile2"]');
  element4.click();
  expect(getTree()).toMatchSnapshot();
});
