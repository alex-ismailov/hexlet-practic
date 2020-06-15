import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/09 lookahead - lookbehind/application', 'utf8').trim();
  const regexp = new RegExp(solution, 'g');

  it('should match', () => {
    const strings = ['80:8080, 80:!@#$', '80: d123e'];

    strings.forEach((string) => {
      expect(string).toMatch(regexp);
      const matches = string.match(regexp);
      expect(matches[0]).toBe('80');
    });
  });

  it('should not match', () => {
    const strings = ['80:', '80', '80:d123f'];

    strings.forEach(string => expect(string).not.toMatch(regexp));
  });
});
