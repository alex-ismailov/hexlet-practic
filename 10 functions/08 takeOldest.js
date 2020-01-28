/*
  Реализуйте функцию takeOldest, которая принимает на вход список
  пользователей и возвращает самых взрослых. Количество возвращаемых пользователей
  задается вторым параметром, который по умолчанию равен единице.

  Подсказки
  Обратите внимание (это видно на примере пользователя Chris),
  что даты могут быть в разных форматах (RFC2822 или ISO 8601). 
  Для преобразования дат в единое представление — unixtimestamp —
  используйте метод Date.parse() и sortBy
*/

import { sortBy } from 'lodash'

// const takeOldest = (users) => {
//   const callback = (a, b) => {
//     const aUts = Date.parse(a.birthday);
//     const bUts = Date.parse(b.birthday);
//     if (aUts === bUts) {
//       return 0;
//     }
//     return aUts > bUts ? 1 : -1;
//   };

//   return users.sort(callback);
// };

// const takeOldest = (users, size = 1) => {
//   return users.sort(({birthday: a}, {birthday: b}) => {
//     const aUts = Date.parse(a);
//     const bUts = Date.parse(b);
//     if (aUts === bUts) {
//       return 0;
//     }
//     return aUts > bUts ? 1 : -1;
//   });
// };

// const takeOldest = (users, size = 1) => {
//   return sortBy(users, (obj) => Date.parse(obj.birthday));
// };

// const takeOldest = (users, size = 1) => {
//   const sortedArray = sortBy(users, ({ birthday }) => Date.parse(birthday));
//   const res = [];
//   for (let i = 0; i < size; i += 1) {
//     res.push(sortedArray[i]);
//   }
//   return res;
// };

const takeOldest = (users, size = 1) => {
  const sortedArray = sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sortedArray.slice(0, size);
};

/* testing */
const users = [
  { name: 'Tirion', birthday: '1988-11-19' },
  { name: 'Sam', birthday: '1999-11-22' },
  { name: 'Rob', birthday: '1975-01-11' },
  { name: 'Sansa', birthday: '2001-03-20' },
  { name: 'Tisha', birthday: '1992-02-27' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

/* testing */
console.log(takeOldest(users));



// console.log(Date.parse('1988-11-19'));
// console.log(Date.parse('Dec 25, 1995'));
