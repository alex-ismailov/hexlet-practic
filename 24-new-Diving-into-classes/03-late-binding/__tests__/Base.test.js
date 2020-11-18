import ChildOfChild from '../ChildOfChild.js';

test('isInstanceOf', () => {
  const obj = new ChildOfChild();
  expect(obj.isInstanceOf('ChildOfChild')).toBe(true);
  expect(obj.isInstanceOf('FirstChild')).toBe(true);
  expect(obj.isInstanceOf('Base')).toBe(true);
  expect(obj.isInstanceOf('FirstOfChild')).toBe(false);
  expect(obj.isInstanceOf('Child')).toBe(false);
});
