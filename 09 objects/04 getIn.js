/*
  Обращение к вложенным объектам выглядит просто,
  только когда мы уверены в наличии всех ключей, попадающихся по пути:

  const data = {
    a: {
      b: {
        c: 'wow'
      }
    }
  };

  data.a.b.c; // wow
  Если же наличие данных ключей в объекте не обязательно, 
  тогда код резко усложняется.
  Каждая попытка обратиться внутрь должна сопровождаться проверкой:

  if (data.a) {
      const acc = data.a;
      if (acc.b) {
          const acc = acc.b;
          if (acc.c) {
              // ...
          }
      }
  }

  Реализуйте функцию getIn, которая извлекает из объекта
  (который может быть любой глубины вложенности) значение по указанным ключам. Аргументы:
  Исходный объект, Массив ключей, по которым ведется поиск значения
  В случае, когда добраться до значения невозможно, возвращается null.
*/
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
    },
  },
};

const getIn = (obj, keys) => {
  let acc = obj; // Для того чтобы прочесть первое св-во
  for (const key of keys) {
    if (acc.hasOwnProperty(key)) {
      acc = acc[key];
    } else {
      return null;
    }
  }
  return acc;
};

// https://qna.habr.com/q/701487
// const getIn = (obj, keys) => keys.reduce((p, c) => p && p.hasOwnProperty(c) ? p[c] : null, obj);
// тоже самое, но в развернутой форме:
// const getIn = (obj, keys) => {
//   return keys.reduce(
//     (acc, currKey) => {
//       if (acc.hasOwnProperty(currKey)) {
//         return acc[currKey];
//       } else {
//         return null;
//       }
//     },
//     obj
//   )
// };

console.log(getIn(data, ['undefined']));        // null
console.log(getIn(data, ['user']));             // 'ubuntu'
console.log(getIn(data, ['user', 'ubuntu']));   // null
console.log(getIn(data, ['hosts', 1, 'name'])); // 'web2'
console.log(getIn(data, ['hosts', 0]));         // { name: 'web1' }
console.log(getIn(data, ['hosts', 1, null]));   // 3




// const getIn = (obj, keys) => {
//   let acc = obj;
//   for (const key of keys) {
//     // console.log(key);
//     // console.log(acc);
//     acc = acc[key];
//     // console.log(acc);
//     // console.log('------');
//   }
//   return acc;
// };