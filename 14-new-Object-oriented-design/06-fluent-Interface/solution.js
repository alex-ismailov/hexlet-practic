/* нормализует их имена, сортирует и группирует по стране. */

// BEGIN (write your solution here)
const compareString = (a, b) => {
  if (a.country > b.country) {
    return 1;
  }
  if (a.country < b.country) {
    return -1;
  }
  return 0;
};

const normalize = (cities) => cities
  .map(({ name, country }) => (
    { name: name.toLowerCase().trim(), country: country.toLowerCase().trim() }))
  .sort(compareString)
  .reduce((acc, { name, country }) => {
    const citiesAcc = [...acc[country] ?? [], name];
    const citiesAccFiltered = citiesAcc
      .filter((elem, currentIndex, arr) => arr.indexOf(elem) === currentIndex);
    return { ...acc, [country]: citiesAccFiltered.sort() };
  }, {});

/* teacher solution */
// export default (data) => data
//   .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
//   .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
//   .map(({ city, country }) => [country, city])
//   .sort() // sort countries and cities
//   .reduce((acc, [country, city]) => {
//     const citiesAcc = acc[country] ?? [];
//     const cities = citiesAcc.concat(city);
//     const uniqueCities = new Set(cities);
//     return { ...acc, [country]: [...uniqueCities] };
//   }, {});
// *******************************

export default normalize;
// END
