import getCarsCountByYear from '../getCarsCountByYear';

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const cars2 = [
  { brand: 'bmw', model: 'm3', year: 2013 },
  { brand: 'opel', model: 'astra', year: 2014 },
  { brand: 'honda', model: 'accent', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2013 },
  { brand: 'kia', model: 'sportage', year: 2015 },
  { brand: 'kia', model: 'rio', year: 2016 },
  { brand: 'bmw', model: 'm5', year: 2016 },
  { brand: 'bmw', model: 'm5', year: 2016 },
];

test('getCarsCountByYear', () => {
  const actual1 = getCarsCountByYear(cars);

  const expected1 = {
    2010: 1,
    2012: 1,
    2013: 1,
    2014: 2,
  };
  expect(actual1).toEqual(expected1);

  const actual2 = getCarsCountByYear(cars2);

  const expected2 = {
    2013: 2,
    2014: 2,
    2015: 1,
    2016: 3,
  };
  expect(actual2).toEqual(expected2);
});
