import path from 'path';
import os from 'os';
import fs from 'fs';
import { unionFiles } from '../unionFiles';

let output;
let filepath1;
let filepath2;

beforeAll(() => {
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  output = path.join(tmpDir, 'output');
  filepath1 = path.join(tmpDir, 'source1');
  fs.writeFileSync(filepath1, 'data1');
  filepath2 = path.join(tmpDir, 'source12');
  fs.writeFileSync(filepath2, 'data2');
});

test('unionFiles 1', (done) => {
  unionFiles('/undefined', filepath2, output, (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('unionFiles 2', (done) => {
  unionFiles(filepath1, '/undefined', output, (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('unionFiles 3', (done) => {
  unionFiles(filepath1, filepath2, '/a/b/c/', (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('unionFiles 4', (done) => {
  unionFiles(filepath1, filepath2, output, (err) => {
    expect(err).toBeNull();

    fs.readFile(output, 'utf-8', (err2, data2) => {
      expect(err2).toBeNull();
      expect(data2).toBe('data1data2');
      done();
    });
  });
});
