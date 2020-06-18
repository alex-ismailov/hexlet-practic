import { promises as fs } from 'fs';
import path from 'path';
import getFunction from '../functions.js';

const toHtmlList = getFunction();

// BEGIN (write your solution here)

let dataSet;

beforeAll(async () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');
  const expected = await readFile('result.html');
  const normExpected = expected.split('\n').map((str) => str.trim()).join('');

  const filesNames = ['list.csv', 'list.json', 'list.yml'];
  const files = await Promise.all(filesNames.map((fileName) => readFile(fileName)));
  const normFiles = files.map((file) => file.split('\n')
    .map((str) => str.trim())
    .filter((str) => str !== '')
  );

  dataSet = normFiles.map((file) => [...file, normExpected]);
  console.log(dataSet);

});

console.log(dataSet);
test.each(dataSet)('.test(%s, %s)', (a, expected) => {
  expect(toHtmlList(a)).toEqual(expected);
});
// END
// test.each(table)(name, fn, timeout)

// test.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
// ])('.add(%i, %i)', (a, b, expected) => {
//   expect(a + b).toBe(expected);
// });

/* useful links */
// dataset: https://ru.hexlet.io/topics/32043
