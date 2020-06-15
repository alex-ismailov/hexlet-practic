import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('20 reg expressions/07 grouping - feedback/application', 'utf8').trim();
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['mam:mam', 'asd mmm:mmm mmm', 'asdf:sdfa'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['mmm:emu', 'emu:mmm', 'mmm mmm', ' aa:aa '];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
