import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';

import run from '../src/application.js';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('application', () => {
  const tasksContainer = document.querySelector('[data-container="tasks"]');
  const listsContainer = document.querySelector('[data-container="lists"]');

  const taskNameInput = screen.getByRole('textbox', { name: /new task name/i });
  // console.log(taskNameInput);
  // console.log(Object.keys(taskNameInput));
  const taskSubmit = screen.getByRole('button', { name: /add task/i });

  const task1 = 'First Task in General';
  userEvent.type(taskNameInput, task1);
  // console.log(taskNameInput);
  // console.log(Object.keys(taskNameInput));
  expect(taskNameInput).toHaveDisplayValue(task1);
  // expect(screen.getByRole('textbox', { name: /new task name/i })).toHaveDisplayValue(task1);
  userEvent.click(taskSubmit);

  expect(taskNameInput).toHaveDisplayValue('');
  expect(tasksContainer).toContainElement(screen.getByText(task1));

  const task2 = 'Second Task in General';
  userEvent.type(taskNameInput, task2);
  expect(taskNameInput).toHaveDisplayValue(task2);
  userEvent.click(taskSubmit);

  expect(taskNameInput).toHaveDisplayValue('');
  expect(tasksContainer).toContainElement(screen.getByText(task1));
  expect(tasksContainer).toContainElement(screen.getByText(task2));

  const listNameInput = screen.getByRole('textbox', { name: /new list name/i });
  const listSubmit = screen.getByRole('button', { name: /add list/i });

  const channel1 = 'Random';
  userEvent.type(listNameInput, channel1);
  expect(listNameInput).toHaveDisplayValue(channel1);
  userEvent.click(listSubmit);

  expect(listNameInput).toHaveDisplayValue('');
  expect(screen.getByRole('link', { name: channel1 })).toBeInTheDocument();
  expect(listsContainer).toContainElement(screen.getByText(channel1));
  expect(tasksContainer).toContainElement(screen.getByText(task1));
  expect(tasksContainer).toContainElement(screen.getByText(task2));

  const linkToRandom = screen.getByText(channel1);
  userEvent.click(linkToRandom);

  expect(screen.queryByRole('link', { name: channel1 })).not.toBeInTheDocument();
  expect(tasksContainer).toBeEmptyDOMElement();

  const task3 = 'Task in Random';
  userEvent.type(taskNameInput, task3);
  userEvent.click(taskSubmit);

  expect(tasksContainer).toContainElement(screen.getByText(task3));

  const linkToGeneral = screen.getByRole('link', { name: /general/i });
  userEvent.click(linkToGeneral);

  expect(tasksContainer).toContainElement(screen.getByText(task1));
  expect(tasksContainer).toContainElement(screen.getByText(task2));
});

test('fresh application', () => {
  const tasksContainer = document.querySelector('[data-container="tasks"]');
  const listsContainer = document.querySelector('[data-container="lists"]');

  expect(tasksContainer).toBeEmptyDOMElement();
  expect(listsContainer).toContainElement(screen.getByRole('listitem'));
});
