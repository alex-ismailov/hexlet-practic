import { _ } from 'lodash';
/* Реализуйте функцию getMenCountByYear, которая принимает на вход список пользователей и
возвращает объект, в котором ключ это год рождения, а значение это количество мужчин,
родившихся в этот год. */

/* Подсказки: Для извлечения года из даты используйте метод getFullYear. */
// const date = new Date('1980-11-03');
// const year = date.getFullYear(); // 1980



const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

// const getMenCountByYear = (users) => {
//   const cb = (acc, { birthday, gender }) => {
//     const year = new Date(birthday).getFullYear();
//     if (gender === 'male') {
//       if (_.has(acc, year)) {
//         acc[year] += 1;
//       } else {
//         acc[year] = 1;
//       }
//     }
//     return acc;
//   };
//   return users.reduce(cb, {});
// };

// return years.reduce((acc, year) => {
//   const count = _.get(acc, year, 0) + 1;
//   return { ...acc, [year]: count };
// }, {});

const getMenCountByYear = (users) => {
  const mans = users.filter(({ gender }) => gender === 'male');
  const years = mans.map(({ birthday }) => new Date(birthday).getFullYear());
  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    /* Если у объектов есть одинаковые ключи, то при слиянии в итоговый объект
    будет записано значение ключа того объекта, который был расположен правее: */
    return { ...acc, [year]: count };
  }, {});
};

/* testing */
// const cb = (acc, { birthday, gender }) => {
//   const year = new Date(birthday).getFullYear();
//   if (gender === 'male') {
//     if (acc.hasOwnProperty(year)) {
//       acc[year] += 1;
//     } else {
//       acc[year] = 1;
//     }
//   }
//   return acc;
// };
// const res = users.reduce(cb, {});
// console.log(res);

console.log(getMenCountByYear(users));
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
