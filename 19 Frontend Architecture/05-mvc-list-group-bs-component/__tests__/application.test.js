import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import run from '../src/application.js';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const getFormattedHTML = () => prettier.format(document.body.innerHTML, options);

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('#application1', async () => {
  expect(getFormattedHTML()).toMatchSnapshot();

  const homeElement = await screen.findByText('Home');
  const profileElement = await screen.findByText('Profile');

  userEvent.click(homeElement);
  expect(getFormattedHTML()).toMatchSnapshot();

  userEvent.click(profileElement);
  expect(getFormattedHTML()).toMatchSnapshot();

  userEvent.click(homeElement);
  expect(getFormattedHTML()).toMatchSnapshot();
});

test('#application2', async () => {
  expect(getFormattedHTML()).toMatchSnapshot();

  const homeElement2 = await screen.findByText('Home 2');
  const profileElement2 = await screen.findByText('Profile 2');

  userEvent.click(homeElement2);
  expect(getFormattedHTML()).toMatchSnapshot();

  userEvent.click(profileElement2);
  expect(getFormattedHTML()).toMatchSnapshot();

  userEvent.click(homeElement2);
  expect(getFormattedHTML()).toMatchSnapshot();
});

test('#application3', () => {
  expect(getFormattedHTML()).toMatchSnapshot();
});
