import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/06 greedy/application', 'utf8').trim();
  const regexp = new RegExp(solution, 'g');

  it('should match', () => {
    const strings = ['(one) ($%@#$) (value1)', 'test (^,ehu-) ) (t) (//)'];

    strings.forEach((string) => {
      expect(string).toMatch(regexp);
      const matches = string.match(regexp);
      expect(matches.length).toBe(3);
    });
  });

  it('should not match', () => {
    const strings = ['2383', '()', '() ('];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
