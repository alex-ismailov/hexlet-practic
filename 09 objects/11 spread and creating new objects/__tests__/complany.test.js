import make from '../company.js';

it('make 1', () => {
  const company = make('Hexlet');
  const expected = {
    name: 'Hexlet',
    state: 'moderating',
    createdAt: Date.now(),
  };
  expect(company).toMatchObject(expected);
});

it('make 2', () => {
  const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
  const expected = {
    name: 'Hexlet',
    state: 'published',
    createdAt: Date.now(),
    website: 'hexlet.io',
  };
  expect(company).toMatchObject(expected);
});
