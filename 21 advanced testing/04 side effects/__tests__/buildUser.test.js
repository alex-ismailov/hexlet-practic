import getFunction from '../functions.js';

const buildUser = getFunction();

// BEGIN (write your solution here)
// test('different person', () => {
//   const user1 = buildUser();
//   const user2 = buildUser();
//   expect(user1).not.toEqual(user2);
// });

describe('fakers tests', () => {
  test('different persons', () => {
    expect(buildUser()).not.toEqual(buildUser());
  });
  test('props setting to person', () => {
    const expected = {
      email: 'Zulauf@yahoo.com',
      firstName: 'Petya',
      lastName: 'Zulauf',
    };
    expect(buildUser(expected)).toEqual(expected);
  });
});
