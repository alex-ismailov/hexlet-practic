/* Реализуйте функцию getChildren, которая принимает на вход список пользователей
и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива
в ключе children. */
/* Подсказки метод flat */

const getChildren = (users) => users.map(({ children }) => children).flat();

/* testing */
const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birdhday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birdhday: '2012-11-03' },
      { name: 'Keit', birdhday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birdhday: '2012-11-03' },
    ],
  },
];

console.log(getChildren(users));
// [
//   { name: 'Mira', birdhday: '1983-03-23' },
//   { name: 'Aria', birdhday: '2012-11-03' },
//   { name: 'Keit', birdhday: '1933-05-14' },
//   { name: 'Tisha', birdhday: '2012-11-03' },
// ];


// const testObj = {
//   name: 'Tirion',
//   children: [
//     { name: 'Mira', birdhday: '1983-03-23' },
//   ],
// };
// const {children} = testObj;
// const {children: [{name}]} = testObj;
// console.log(children);
// console.log(name);
