/* 
  Реализуйте и экспортируйте по умолчанию функцию getGirlFriends,
  которая принимает на вход список пользователей и возвращает плоский список подруг
  всех пользователей (без сохранения ключей). Друзья каждого пользователя хранятся в виде
  массива в ключе friends. Пол доступен по ключу gender и может принимать значения
  male или female.
  Подсказки: flatten from lodash
*/

import {flatten} from 'lodash';

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

const getGirlFriends = (users) => {
  /* отображаем всех друзей в отдельный массив */
  const allFriends = users.map(({ friends }) => friends);
  /* нормализуем данные чтобы с ними было удобно работать,
  allFriends это массив подмассивов в которых лежат объекты/друзья,
  выравним его в одноуровневый массив flattens */
  const flattens = flatten(allFriends);
  /* затем просто фильтруем одноуровневый массив */
  const filtred = flattens.filter(({ gender }) => gender === 'female');
  return filtred;
};

/* testing */
console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' }
// ]
