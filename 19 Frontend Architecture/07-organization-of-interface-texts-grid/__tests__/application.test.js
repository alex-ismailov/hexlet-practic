import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import '@testing-library/jest-dom';

import run from '../src/application.js';

// const within = testingLibrary.within;
import { within } from '@testing-library/dom';
import { getNodeText } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

const getFixture = (filename) => fs.readFileSync(path.join('__fixtures__', filename)).toString();
const isEven = (int) => int % 2 === 0;
const toPairs = (array) => array.reduce((acc, item, idx, arr) => isEven(idx) ? acc : [...acc, [arr[idx - 1], item]], []);
const getProps = (queries) => {
  const rawProps = queries.getAllByRole('cell')
    .map((cell) => getNodeText(cell));
  const props = toPairs(rawProps);

  return props;
};

beforeEach(async () => {
  const initHtml = getFixture('index.html');
  document.documentElement.innerHTML = initHtml;
  await run();
});

test('application', async () => {
  const queries = within(document.querySelector('.container'));
  const expectedProps = JSON.parse(getFixture('props.json'));

  expect(queries.getByRole('link', { name: /name ?\(asc\)/i })).toBeInTheDocument();
  expect(queries.getByRole('link', { name: /value ?\(unsorted\)/i })).toBeInTheDocument();

  const propsSortedByNameAsc = getProps(queries);
  expect(propsSortedByNameAsc).toEqual(expectedProps.sortedByNameAsc);

  userEvent.click(queries.getByRole('link', { name: /name ?\(asc\)/i }));
  expect(queries.getByRole('link', { name: /name ?\(desc\)/i })).toBeInTheDocument();
  expect(queries.getByRole('link', { name: /value ?\(unsorted\)/i })).toBeInTheDocument();
  const propsSortedByNameDesc = getProps(queries);
  expect(propsSortedByNameDesc).toEqual(expectedProps.sortedByNameDesc);

  userEvent.click(queries.getByRole('link', { name: /value ?\(unsorted\)/i }));
  expect(queries.getByRole('link', { name: /name ?\(unsorted\)/i })).toBeInTheDocument();
  expect(queries.getByRole('link', { name: /value ?\(asc\)/i })).toBeInTheDocument();
  const propsSortedByValueAsc = getProps(queries);
  expect(propsSortedByValueAsc).toEqual(expectedProps.sortedByValueAsc);

  userEvent.click(queries.getByRole('link', { name: /value ?\(asc\)/i }));
  expect(queries.getByRole('link', { name: /name ?\(unsorted\)/i })).toBeInTheDocument();
  expect(queries.getByRole('link', { name: /value ?\(desc\)/i })).toBeInTheDocument();
  const propsSortedByValueDesc = getProps(queries);
  expect(propsSortedByValueDesc).toEqual(expectedProps.sortedByValueDesc);

  userEvent.click(queries.getByRole('link', { name: /name ?\(unsorted\)/i }));
  expect(queries.getByRole('link', { name: /name ?\(asc\)/i })).toBeInTheDocument();
  expect(queries.getByRole('link', { name: /value ?\(unsorted\)/i })).toBeInTheDocument();
  const propsSortedByNameAsc2 = getProps(queries);
  expect(propsSortedByNameAsc2).toEqual(expectedProps.sortedByNameAsc);
});
