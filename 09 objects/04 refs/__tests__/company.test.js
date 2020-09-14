import is from '../company.js';

it('is 1', () => {
  const company1 = {};
  const company2 = {};
  expect(is(company1, company2)).toBe(true);
});

it('is 2', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Google' };
  expect(is(company1, company2)).toBe(false);
});

it('is 3', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Hexlet' };
  expect(is(company1, company2)).toBe(true);
});

it('is 4', () => {
  const company1 = { name: 'Hexlet', website: 'https://hexlet.io' };
  const company2 = { name: 'Hexlet', website: 'https://code-basics.com' };
  expect(is(company1, company2)).toBe(false);
});

it('is 5', () => {
  const company1 = { name: 'Hexlet', website: 'https://hexlet.io' };
  const company2 = { name: 'Hexlet', website: 'https://code-basics.com', innerCompany: 'company1' };
  expect(is(company1, company2)).toBe(false);
});

it('is 6 deep equal', () => {
  const innerCompany = { name: 'InnerHexlet', website: 'https://innerHexlet.io' };
  const company1 = { name: 'Hexlet', website: 'https://hexlet.io', innerCompany: innerCompany};
  const company2 = { name: 'Hexlet', website: 'https://hexlet.io', innerCompany: innerCompany };
  expect(is(company1, company2)).toBe(true);
});

it('is 7 deep equal', () => {
  const innerCompany1 = { name: 'InnerHexlet', website: 'https://innerHexlet.io' };
  const innerCompany2 = { name: 'InnerHexlet-2', website: 'https://innerHexlet-2.io' };
  const company1 = { name: 'Hexlet', website: 'https://hexlet.io', innerCompany: innerCompany1};
  const company2 = { name: 'Hexlet', website: 'https://code-basics.com', innerCompany: innerCompany2 };
  expect(is(company1, company2)).toBe(false);
});
