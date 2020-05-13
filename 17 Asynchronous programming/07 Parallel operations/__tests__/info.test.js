import path from 'path';
import fs from 'fs';
import { getDirectorySize } from '../info.js';

const getPath = (dirpath) => path.join(__dirname, '..', '__fixtures__', dirpath);

// test('test1', () => {
  
// })

test('getDirectorySize', (done) => {
  const dirpath = getPath('/undefined');
  getDirectorySize(dirpath, (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('getDirectorySize2', (done) => {
  const dirpath = getPath('/emptyFolder1');
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
  getDirectorySize(dirpath, (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(0);
    done();
  });
});

test('getDirectorySize3', (done) => {
  const dirpath = getPath('');
  getDirectorySize(dirpath, (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(64);
    done();
  });
});

test('getDirectorySize4', (done) => {
  const dirpath = getPath('/emptyFolder2');
  getDirectorySize(dirpath, (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(0);
    done();
  });
});
