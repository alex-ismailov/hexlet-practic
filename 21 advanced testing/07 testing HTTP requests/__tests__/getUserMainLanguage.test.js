import OctokitFake from '../support/OctokitFake';
import getFunction from '../functions';

const getUserMainLanguage = getFunction();

// BEGIN (write your solution here)
test('getUserMainLanguage', async () => {
  const data = [{ language: 'php' }, { language: 'javascript' }];
  const client = new OctokitFake(data);
  const userMainLanguage = await getUserMainLanguage('Alex', client);
  expect(userMainLanguage).toEqual('php');
});

test('getUserMainLanguage when empty', async () => {
  const client = new OctokitFake([]);
  const userMainLanguage = await getUserMainLanguage('Alex', client);
  expect(userMainLanguage).toBeNull();
});
// END
