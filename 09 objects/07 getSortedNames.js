/* 
  Реализуйте и экспортируйте по умолчанию функцию getSortedNames, 
  которая принимает на вход список пользователей, извлекает их имена,
  сортирует и возвращает отсортированный список имен.
*/

const getSortedNames = (users) => {
  const names = [];
  for (const user of users) {
    const { name } = user;
    names.push(name);
  }
  return names.sort();
};

/* testing */
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
