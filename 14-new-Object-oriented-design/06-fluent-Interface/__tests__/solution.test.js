import normalize from '../solution.js';

test('#1 normalize', () => {
  const raw = [
    { name: 'istambul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStambul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
  ];

  const expected = {
    russia: [
      'moscow',
      'samara',
    ],
    turkey: [
      'antalia',
      'istambul',
    ],
    usa: [
      'miami',
    ],
  };

  const actual = normalize(raw);
  expect(actual).toEqual(expected);
  expect(Object.keys(actual)).toEqual(Object.keys(expected));
});

test('#2 normalize', () => {
  const raw = [
    {
      name: 'pariS ',
      country: ' france',
    },
    {
      name: ' madrid',
      country: ' sPain',
    },
    {
      name: 'valencia',
      country: 'spain',
    },
    {
      name: 'marcel',
      country: 'france',
    },
    {
      name: ' madrid',
      country: ' sPain',
    },
  ];

  const expected = {
    france: [
      'marcel',
      'paris',
    ],
    spain: [
      'madrid',
      'valencia',
    ],
  };

  const actual = normalize(raw);
  expect(actual).toEqual(expected);
  expect(Object.keys(actual)).toEqual(Object.keys(expected));
});
