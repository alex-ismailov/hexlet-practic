import fs from 'fs';
import path from 'path';
import { html } from 'js-beautify';

import run from '../src/application.js';

const htmlOptions = {
  preserve_newlines: false,
  unformatted: [],
};

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML, htmlOptions);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const form = document.querySelector('.feedback-form');
  expect(getTree()).toMatchSnapshot();

  const { email, name, comment } = form.elements;
  email.value = 'test@email.com';
  name.value = 'Matz';
  comment.value = 'Ruby ze best';
  expect(getTree()).toMatchSnapshot();

  form.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();
});
