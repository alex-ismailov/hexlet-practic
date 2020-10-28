import Truncater from '../solution.js';

const cases1 = [
  [{}, 'one two'],
  [{ length: 6 }, 'one tw...'],
  [{ separator: '.' }, 'one two'],
  [{ length: '3' }, 'one...'],
];

describe('Truncater with default options', () => {
  const truncater = new Truncater();

  test.each(cases1)('extend options: %o', (params, expected) => {
    expect(truncater.truncate('one two', params)).toEqual(expected);
  });
});


const cases2 = [
  [{}, 'one...'],
  [{ separator: '!' }, 'one!'],
  [{}, 'one...'],
  [{ length: 7 }, 'one two'],
];

describe('Truncater with custom length', () => {
  const truncater = new Truncater({ length: 3 });

  test.each(cases2)('extend options: %o', (params, expected) => {
    expect(truncater.truncate('one two', params)).toEqual(expected);
  });
});


const cases3 = [
  [{}, 'one two'],
  [{ length: 3 }, 'one__'],
  [{ length: 5, separator: '' }, 'one t'],
  [{}, 'one two'],
];

describe('Truncater with custom separator', () => {
  const truncater = new Truncater({ separator: '__' });

  test.each(cases3)('extend options: %o', (params, expected) => {
    expect(truncater.truncate('one two', params)).toEqual(expected);
  });
});
