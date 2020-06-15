import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/application.js';

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

test('application', async () => {
  expect(getTree()).toMatchSnapshot();

  const newTaskForm = document.querySelector('[data-container="new-task-form"]');
  const newTaskNameInput = newTaskForm.elements.name;
  newTaskNameInput.setAttribute('value', 'First Task in General');
  newTaskForm.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();

  newTaskNameInput.setAttribute('value', 'Second Task in General');
  newTaskForm.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();

  const newListForm = document.querySelector('[data-container="new-list-form"]');
  const newListNameInput = newListForm.elements.name;
  newListNameInput.setAttribute('value', 'Random');
  newListForm.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();

  const randomList = document.querySelector('[href="#random"]');
  randomList.click();
  expect(getTree()).toMatchSnapshot();

  newTaskNameInput.setAttribute('value', 'First Task in Random');
  newTaskForm.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();

  const generalList = document.querySelector('[href="#general"]');
  generalList.click();
  expect(getTree()).toMatchSnapshot();
});

test('application 2', async () => {
  expect(getTree()).toMatchSnapshot();
});
