import nock from 'nock';
import getFunction from '../functions';

const getUserMainLanguage = getFunction();

nock.disableNetConnect();

// BEGIN (write your solution here)
test('getUserMainLanguage', async () => {
  nock(/api\.github\.com/)
    .log(console.log)
    .get(/users\/Alex\/repos/)
    .reply(200, [{ language: 'php' }, { language: 'javascript' }]);

  const mainLanguage = await getUserMainLanguage('Alex');
  expect(mainLanguage).toEqual('php');
});

test('getUserMainLanguage when empty', async () => {
  nock(/api\.github\.com/)
    .get(/users\/Alex\/repos/)
    .reply(200);

  const mainLanguage = await getUserMainLanguage('Alex');
  expect(mainLanguage).toBeNull();
});
// END
