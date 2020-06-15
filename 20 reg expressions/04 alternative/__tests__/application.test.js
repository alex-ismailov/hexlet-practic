import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/04 alternative/application', 'utf8').trim();

  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['one', 'two', 'three'];

    strings.forEach(string => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['four', 'five'];

    strings.forEach(string => expect(string).not.toMatch(regexp));
  });
});
