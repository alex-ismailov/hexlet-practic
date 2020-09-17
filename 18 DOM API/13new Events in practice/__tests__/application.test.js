import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/application.js';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join('18 DOM API/13new Events in practice/__fixtures__', 'index.html')).toString();
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
