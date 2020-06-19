import os from 'os';
import path from 'path';
import { promises as fs } from 'fs';
import getFunction from '../functions.js';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (fileName) => path.join(path.resolve(), '21 advanced testing/05 testing code that interacts with files/__fixtures__', fileName);
// const expected = await fs.readFile(getFixturePath('before.html'));
const tmpPath = os.tmpdir();
let destPathForBeforeFile;
let destPathForAfterFile

beforeEach(async () => {
  const beforeFilePath = getFixturePath('before.html');
  destPathForBeforeFile = `${tmpPath}/before.html`;
  await fs.copyFile(beforeFilePath, destPathForBeforeFile);
});

test('prettifyHTMLFile', async () => {
  const expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');

  const filePath = `${tmpPath}/before.html`;
  await prettifyHTMLFile(filePath);
  const res = await fs.readFile(filePath, 'utf-8');
  expect(res).toEqual(expected);
});


// let expected;
// const getFixturePath = (fileName) => path.join(path.resolve(), '__fixtures__', fileName);

// beforeEach(async () => {
//   expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');
// });

// test('prettifyHTMLFile', async () => {
//   const filePath = getFixturePath('before.html');
//   await prettifyHTMLFile(filePath);
//   const res = await fs.readFile(filePath, 'utf-8');
//   expect(res).toEqual(expected);
// });
// END
