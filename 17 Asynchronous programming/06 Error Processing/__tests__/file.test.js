import path from 'path';
import os from 'os';
import fs from 'fs';
import { move } from '../file.js';

test('move1', (done) => {
  move('/undefined', '/undefined2', (error) => {
    expect(error).not.toBeNull();
    expect(error.syscall).toBe('open');
    expect(error.code).toBe('ENOENT');
    done();
  });
});

test('move2', (done) => {
  const dirname = fs.mkdtempSync(path.join(os.tmpdir(), 'hexlet-'));
  const from = path.join(dirname, 'source');
  fs.writeFileSync(from, 'haha');
  move(from, '/undefined', (error) => {
    expect(error).not.toBeNull();
    const exists1 = fs.existsSync(from);
    expect(exists1).toBe(true);
    done();
  });
});

test('move3', (done) => {
  const dirname = fs.mkdtempSync(path.join(os.tmpdir(), 'hexlet-'));
  const to = path.join(dirname, 'dest');
  move('/etc/passwd', to, (error) => {
    expect(error).not.toBeNull();
    done();
  });
});

test('move4', (done) => {
  const dirname = fs.mkdtempSync(path.join(os.tmpdir(), 'hexlet-'));
  const from = path.join(dirname, 'source');
  fs.writeFileSync(from, 'haha');
  const to = path.join(dirname, 'dest');
  move(from, to, (error) => {
    expect(error).toBeNull();
    const exists1 = fs.existsSync(from);
    expect(exists1).toBe(false);
    const exists2 = fs.existsSync(to);
    expect(exists2).toBe(true);
    const content = fs.readFileSync(to, 'utf-8');
    expect(content).toBe('haha');
    done();
  });
});
