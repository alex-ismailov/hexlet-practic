/* 
  Query String (строка запроса) - часть адреса страницы в интернете содержащая
  константы и их значения. Она начинается после вопросительного знака и идет до
  конца адреса.
  Пример:
  # query string: page=5
  https://ru.hexlet.io/blog?page=5
  Если параметров несколько, то они отделяются амперсандом &:
  # query string: page=5&per=10
  https://ru.hexlet.io/blog?per=10&page=5
  bqs.js
  Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:

  bqs({ per: 10, page: 1 });
  // page=1&per=10
  Имена параметров в выходной строке должны располагаться в алфавитном порядке
  (то есть их нужно отсортировать).
*/


// const bqs = (queryObj) => {
//   let resStr = '';
//   const queryObjKeys = Object.keys(queryObj).sort();
//   for (let i = 0; i < queryObjKeys.length; i += 1) {
//     resStr += `${queryObjKeys[i]}=${queryObj[queryObjKeys[i]]}`;
//     if (i < queryObjKeys.length - 1) {
//       resStr += '&';
//     }
//   }
//   return resStr;
// };

/* my new solution */
const bqs = (params) => {
  const res = [];
  const entries = Object.entries(params);
  for (const [key, value] of entries) {
    res.push(`${key}=${value}`);
  }
  return res.sort().join('&');
}

/* teacher solution */
// const bqs = (queryObj) => {
//   let res = [];
//   const queryObjKeys = Object.keys(queryObj);
//   for (const key of queryObjKeys) {
//     res.push(`${key}=${queryObj[key]}`); 
//   }
//   return res.sort().join('&');
// };


/* testing */
const result1 = bqs({});
console.log(result1); // toEqual('');

const result2 = bqs({ page: 1 });
console.log(result2); // toEqual('page=1');

const result3 = bqs({ per: 10, page: 1 });
console.log(result3); // toEqual('page=1&per=10');

const result4 = bqs({
  a: 10,
  s: 'Wow',
  d: 3.2,
  z: '89',
});
console.log(result4); // toEqual('a=10&d=3.2&s=Wow&z=89');
