import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/01 metacharacter/solution', 'utf8').trim();
  console.log(solution);

  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['ruby1.9', 'ruby1.h', 'abcruby1.8xyz'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['ruby1a9', 'ruby2.5', 'ruby1111', 'ruby10'];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
