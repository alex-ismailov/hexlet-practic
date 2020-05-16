import { getTypes } from '../getTypes';

test('getTypes 1', () => {
  const actual = getTypes(['undefined']);
  return expect(actual).resolves.toEqual([null]);
});

test('getTypes 2', () => {
  const actual = getTypes(['/etc']);
  return expect(actual).resolves.toEqual(['directory']);
});

test('getTypes 3', () => {
  const actual = getTypes(['/etc/hosts']);
  return expect(actual).resolves.toEqual(['file']);
});

test('getTypes 4', () => {
  const paths = ['/etc/hosts', '/undefined', '/etc/bashrc', '/etc'];
  return expect(getTypes(paths)).resolves.toEqual(['file', null, null, 'directory']);
});

test('getTypes 5', () => {
  const actual = getTypes(['/undefined', '/etc/hosts', '/et', '/etc/bashrc']);
  return expect(actual).resolves.toEqual([null, 'file', null, null]);
});
