import { promises as fs } from 'fs';
import path from 'path';
import getFunction from '../functions.js';

const toHtmlList = getFunction();

// BEGIN (write your solution here)
let normExpected;

beforeAll(async () => {
  const expected = await fs.readFile(`${path.resolve()}/21 advanced testing/03 testing with fixtures/__fixtures__/result.html`, 'utf-8');
  // 21 advanced testing/03 testing with fixtures/__fixtures__/list.csv
  normExpected = expected.split('\n').map((str) => str.trim()).join('');
});

test('toHtmlList', async () => {
  const getFixturePaths = (fileNames) => fileNames
    .map((fileName) => path.join(path.resolve(), '21 advanced testing/03 testing with fixtures/__fixtures__/', fileName));

  const filesNames = ['list.csv', 'list.json', 'list.yml'];
  const paths = getFixturePaths(filesNames);

  const fileContents = await Promise.all(paths.map((filePath) => toHtmlList(filePath)));
  const normFileContents = fileContents
    .map((fileContent) => fileContent.split('\n')
      .map((str) => str.trim()).join(''));

  expect(normFileContents[0]).toEqual(normExpected);
  expect(normFileContents[1]).toEqual(normExpected);
  expect(normFileContents[2]).toEqual(normExpected);
});

/* useful links */
// dataset: https://ru.hexlet.io/topics/32043
// практическт решение: https://ru.hexlet.io/topics/41982
