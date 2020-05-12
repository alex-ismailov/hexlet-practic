import fs from 'fs';
import os from 'os';
import path from 'path';
import write from '../writer.js';

test('readFile', (done) => {
  const data = 'example';
  const filename = 'test';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  const filepath = path.join(tmpDir, filename);
  write(filepath, data, (err) => {
    if (err) {
      done.fail(err);
      return;
    }
    const content = fs.readFileSync(filepath, 'utf-8');
    expect(content).toEqual(data);
    done();
  });
});
