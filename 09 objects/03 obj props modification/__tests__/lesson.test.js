import normalize from '../lesson.js';

test('normalize 1', () => {
  const lesson = { name: 'intro', description: 'about Something' };
  const expected = {
    name: 'Intro',
    description: 'about something',
  };
  normalize(lesson);
  expect(lesson).toEqual(expected);
});

test('normalize 2', () => {
  const lesson = { name: '', description: 'Some Description' };
  const expected = {
    name: '',
    description: 'some description',
  };
  normalize(lesson);
  expect(lesson).toEqual(expected);
});
