import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import userEvent from '@testing-library/user-event';

// import run from '../src/application.js';
import run from '../src/application teacher solution.js';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join(fixturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application 1', async () => {
  expect(getTree()).toMatchSnapshot();

  const name = document.querySelector('[data-editable-target="name"]');
  name.click();
  expect(getTree()).toMatchSnapshot();

  const form1 = document.querySelector('form');
  const input1 = form1.elements.name;
  await userEvent.type(input1, 'Hexlet');
  form1.submit();
  expect(getTree()).toMatchSnapshot();

  const email = document.querySelector('[data-editable-target="email"]');
  email.click();
  expect(getTree()).toMatchSnapshot();

  const form2 = document.querySelector('form');
  const input2 = form2.elements.email;
  await userEvent.type(input2, 'support@hexlet.io');
  form2.submit();
  expect(getTree()).toMatchSnapshot();

  name.click();
  const form3 = document.querySelector('form');
  const input3 = form3.elements.name;
  await userEvent.clear(input3);
  form3.submit();
  expect(getTree()).toMatchSnapshot();
});

test('application 2', async () => {
  expect(getTree()).toMatchSnapshot();
});
