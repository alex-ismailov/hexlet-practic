/* нормализует их имена, сортирует и группирует по стране. */

// BEGIN (write your solution here)
// const normalize = (cities) => cities
//   .map((city) => {
//     const { name, country } = city;
//     return { name: name.toLowerCase().trim(), country: country.toLowerCase().trim() };
//   })
//   .sort((a, b) => {
//     if (a.country > b.country) {
//       return 1;
//     }
//     if (a.country < b.country) {
//       return -1;
//     }
//     return 0;
//   })
//   .reduce((acc, { name, country }) => {
//     return { ...acc, [country]: [ ...acc[country] ?? [], name].sort() };
//   }, {});

const normalize = (cities) => cities
  .map(({ name, country }) => (
    { name: name.toLowerCase().trim(), country: country.toLowerCase().trim() })
  )
  .sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    }
    if (a.country < b.country) {
      return -1;
    }
    return 0;
  })
  .reduce((acc, { name, country }) => {
    return { ...acc, [country]: [ ...acc[country] ?? [], name].sort() };
  }, {})
  


export default normalize;
// END


const countries = [
  { name: 'istambul', country: 'turkey' },
  { name: 'Moscow ', country: ' Russia' },
  { name: 'iStambul', country: 'tUrkey' },
  { name: 'antalia', country: 'turkeY ' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Miami', country: 'usa' },
];
console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
