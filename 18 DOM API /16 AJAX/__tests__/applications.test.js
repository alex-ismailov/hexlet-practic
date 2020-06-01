import fs from 'fs';
import path from 'path';
import timer from 'timer-promise';
import { html } from 'js-beautify';

import run from '../src/application.js';

const htmlOptions = {
  preserve_newlines: true,
  unformatted: [],
};

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML, htmlOptions);

const pressKey = (key, el = document.body, value = key) => {
  const e = new KeyboardEvent('input', { key, value });
  el.value = value; // eslint-disable-line
  el.dispatchEvent(e);
};

const mockResponse = (status, statusText, response) => new window.Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json',
  },
});

const mockFetch = (data) => {
  window.fetch = jest.fn().mockImplementation((url) => {
    console.log(url.toString()); // eslint-disable-line
    return Promise.resolve(mockResponse(200, null, JSON.stringify(data)));
  });
};

// const host = 'http://hexlet.io';

beforeEach(async () => {
  // Object.defineProperty(window.location, 'origin', {
  //   writable: true,
  //   value: host,
  // });

  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', async () => {
  const input = document.querySelector('[data-autocomplete]');
  input.focus();

  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('p', input);
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['pakistan', 'panama', 'paraguay']);
  pressKey('a', input, 'pa');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['panama']);
  pressKey('n', input, 'pan');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['pakistan', 'panama', 'paraguay']);
  pressKey('backspace', input, 'pa');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('backspace', input, 'p');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();
});

test('application 2', async () => {
  const input = document.querySelector('[data-autocomplete]');
  input.focus();

  mockFetch([]);
  pressKey('r', input);
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['russia']);
  pressKey('u', input, 'ru');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('c', input, 'ruc');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();
});
