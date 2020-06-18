import { promises as fs } from 'fs';
import path from 'path';
import getFunction from '../functions.js';

const toHtmlList = getFunction();

// BEGIN (write your solution here)
/* teacher solution */
const formats = ['csv', 'json', 'yml'];
// const getFixturePath = (name) => path.join('__fixtures__', name);
const getFixturePath = (name) => path.join(`${path.resolve()}/21 advanced testing/03 testing with fixtures/__fixtures__/${name}`);

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('result.html'), 'utf-8');
});

test.each(formats)('%s', async (format) => {
  const filepath = getFixturePath(`list.${format}`);
  const actual = await toHtmlList(filepath);
  expect(actual).toEqual(expected.trim());
});
/* ************************************************ */

// let expected;
// const getFilePath = (fileName) => (
//   path.join(`${path.resolve()}/21 advanced testing/03 testing with fixtures/__fixtures__/${fileName}`)
// );
// const filesNames = ['list.csv', 'list.json', 'list.yml'];

// beforeAll(async () => {
//   const resultContent = await fs.readFile(getFilePath('result.html'), 'utf-8');
//   expected = resultContent.toString().trim();
// });

// test.each(filesNames.map((fileName) => getFilePath(fileName)))('toHtmlList(%s)', async (filePath) => {
//   const actual = await toHtmlList(filePath);
//   expect(actual).toEqual(expected);
// });

/* useful links */
// dataset: https://ru.hexlet.io/topics/32043
// практическт решение: https://ru.hexlet.io/topics/41982
