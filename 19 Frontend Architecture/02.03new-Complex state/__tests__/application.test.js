import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import nock from 'nock';
import testingLibraryDom from '@testing-library/dom';
import testingLibraryUserEvent from '@testing-library/user-event';

import run from '../src/application.js';

const { screen, waitFor } = testingLibraryDom;
const userEvent = testingLibraryUserEvent.default;

nock.disableNetConnect();

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
});

test('empty backend', async () => {
  const data = { items: [] };
  nock('http://localhost:80').get('/api/tasks').reply(200, data);
  await run();
  expect(nock.isDone()).toBe(true);
});

test('backend with tasks', async () => {
  const task1 = { name: 'task one' };
  const task2 = { name: 'task two' };
  const data = { items: [task1, task2] };
  nock('http://localhost:80').get('/api/tasks').reply(200, data);
  await run();

  expect(document.body).toHaveTextContent(task1.name);
  expect(document.body).toHaveTextContent(task2.name);
});

test('working process', async () => {
  nock('http://localhost:80').get('/api/tasks').reply(200, { items: [] });
  await run();

  const submit = await screen.findByRole('button', { name: /add/i });
  const input = await screen.findByRole('textbox');

  nock('http://localhost:80').post('/api/tasks').reply(201);

  userEvent.type(input, 'new task');
  userEvent.click(submit);

  waitFor(() => {
    expect(document.body).toHaveTextContent('new task');
  });

  userEvent.type(input, 'another task');
  userEvent.click(submit);

  waitFor(() => {
    expect(document.body).toHaveTextContent('another task');
  });
});
