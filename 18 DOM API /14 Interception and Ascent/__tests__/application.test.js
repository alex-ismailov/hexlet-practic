import fs from 'fs';
import path from 'path';
import { html } from 'js-beautify';

import run from '../src/application.js';

const getCell = (rowIndex, cellIndex) => {
  const table = document.querySelector('table');
  return table.rows.item(rowIndex).cells.item(cellIndex);
};

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML);

beforeAll(() => {
  window.onerror = (e) => console.log(e); /* eslint-disable-line no-console */
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run((ar) => ar);
});

test('gem puzzle', () => {
  expect(getTree()).toMatchSnapshot();

  getCell(3, 3).click();
  getCell(2, 2).click();
  getCell(1, 2).click();
  expect(getTree()).toMatchSnapshot();

  getCell(3, 2).click();
  expect(getTree()).toMatchSnapshot();

  getCell(2, 2).click();
  expect(getTree()).toMatchSnapshot();

  getCell(1, 2).click();
  expect(getTree()).toMatchSnapshot();

  getCell(1, 1).click();
  expect(getTree()).toMatchSnapshot();

  getCell(1, 0).click();
  getCell(1, 0).click();
  expect(getTree()).toMatchSnapshot();

  getCell(2, 0).click();
  getCell(0, 3).click();
  expect(getTree()).toMatchSnapshot();
});
