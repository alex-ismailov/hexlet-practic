import getFunction from '../functions.js';

const buildUser = getFunction();

// BEGIN (write your solution here)
describe('fakers tests', () => {
  test('different persons', () => {
    const user1 = buildUser();
    const user2 = buildUser();
    expect(user1).not.toEqual(user2);
  });
  test('props setting to person', () => {
    const user1Data = {
      email: 'Zulauf@yahoo.com',
      firstName: 'Petya',
      lastName: 'Zulauf',
    };
    const user1 = buildUser(user1Data);
    expect(buildUser(user1)).toEqual(user1Data);
  });
});
