import path from 'path';
import fs from 'fs';
import { getDirectorySize } from '../getDirectorySize';

const getPath = (dirpath) => path.join(__dirname, '..', '__fixtures__', dirpath);

test('getDirectorySize 1', () => {
  const dirpath = getPath('/undefined');
  const promise = getDirectorySize(dirpath);
  return expect(promise).rejects.toThrow();
});

test('getDirectorySize 2', () => {
  const dirpath = getPath('/opt');
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
  const promise = getDirectorySize(dirpath);
  return expect(promise).resolves.toBe(0);
});

// test('getDirectorySize 3', () => {
//   const dirpath = getPath('/usr/local/bin');
//   const promise = getDirectorySize(dirpath);
//   return expect(promise).resolves.toBe(1240);
// });

// test('getDirectorySize 4', () => {
//   const dirpath = getPath('/usr/local/lib');
//   const promise = getDirectorySize(dirpath);
//   return expect(promise).resolves.toBe(0);
// });
