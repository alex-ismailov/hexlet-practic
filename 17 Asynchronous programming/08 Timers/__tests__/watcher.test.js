import path from 'path';
import os from 'os';
import fs from 'fs';
import watch from '../watcher.js';

const buildFilePath = (n) => path.join(os.tmpdir(), `example-2-${n}`);
const prepareFileSync = (n) => {
  const filepath = buildFilePath(n);
  fs.writeFileSync(filepath, '');
  return filepath;
};

test('watch', (done) => {
  const id = watch('/undefined', 4, (err) => {
    clearInterval(id);
    expect(err).not.toBeNull();
    done();
  });
});

test('watch 2', (done) => {
  const filepath = prepareFileSync(2);
  const id = watch(filepath, 500, (err) => {
    clearInterval(id);
    expect(err).toBeNull();
    done();
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
});

test('watch 3', (done) => {
  const id = watch('/etc/hosts', 100, () => {
    expect(true).toBe(false);
  });
  setTimeout(() => {
    clearInterval(id);
    done();
  }, 200);
});

test('watch 4', (done) => {
  const filepath = prepareFileSync(4);
  let count = 0;
  const id = watch(filepath, 500, (err) => {
    count += 1;
    if (count === 2) {
      clearInterval(id);
      expect(err).toBeNull();
      done();
    }
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
  setTimeout(() => fs.appendFileSync(filepath, 'uhe'), 1100);
});
