import path from 'path';
import ls from '../ls.js';

// test('ls dir', async () => {
//   const expected = [
//     { filepath: '/var/backups', mode: 16877 },
//     { filepath: '/var/cache', mode: 16877 },
//     { filepath: '/var/lib', mode: 16877 },
//     { filepath: '/var/local', mode: 17917 },
//     { filepath: '/var/lock', mode: 17407 },
//     { filepath: '/var/log', mode: 16877 },
//     { filepath: '/var/mail', mode: 17917 },
//     { filepath: '/var/opt', mode: 16877 },
//     { filepath: '/var/run', mode: 16877 },
//     { filepath: '/var/spool', mode: 16877 },
//     { filepath: '/var/tmp', mode: 17407 },
//   ];
//   const actual = await ls('/var');
//   expect(actual).toEqual(expected);
// });

test('ls file', async () => {
  const expected = [
    { filepath: '/etc/passwd', mode: 33188 },
  ];
  const actual = await ls('/etc/passwd');
  expect(actual).toEqual(expected);
});

test('ls file relative path', async () => {
  const expected = [
    { filepath: '/etc/passwd', mode: 33188 },
  ];
  const filepath = path.relative(__dirname, '/etc/passwd');
  const actual = await ls(filepath);
  expect(actual).toEqual(expected);
});
