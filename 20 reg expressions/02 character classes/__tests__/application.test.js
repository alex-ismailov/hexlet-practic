import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/02 character classes/application', 'utf8').trim();
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['23/A', '83/#', '92/?', '92/8'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['23/a', '53/e', 'd3/3', '3d/2', '2383'];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
