// Реализуйте и экспортируйте по умолчанию функцию findWhere,
// которая принимает на вход массив (элементы которого — это объекты) и
// пары ключ-значение (тоже в виде объекта), а возвращает первый элемент
// исходного массива, ЗНАЧЕНИЯ которого соответствуют переданным парам (всем переданным).
// Если совпадений не было, то функция должна вернуть false.

// const findWhere = (data, where) => {
//   const whereKeys = Object.keys(where);
//   let desiredObjIndex = false;
//   for (let i = 0; i < data.length; i += 1) { // проходимся по каждому объекту из массива data
//     for (const keyFromWhere of whereKeys) { // проверяем каждый ключ пары из объекта where
//       if (data[i].hasOwnProperty(keyFromWhere)) { // если найдено совпадение по ключам,
//         /* то проверяем значения на идентичность, */
//         if (data[i][keyFromWhere] !== where[keyFromWhere]) {
//           /* если хотя бы одно значение по текущим ключам не совпадает,
//           то нет смысла сверять текущий объект из data с объектом where.
//           поэтому обнуляем индекс по которому мог бы находится искомый объект в массиве data */
//           desiredObjIndex = false;
//           /* бросаем дальнейшие проверки в цикле forof,
//           чтобы перейти к следующему объекту из массива data */
//           break;
//         }
//         /* если ключи и значения по значения по этим ключам совпадают,
//         то это претендент на искомый объект. */
//         desiredObjIndex = i;
//       }
//     }
//     /* если текущий объект из data прошел все проверки на совпадения по ключам и значениям по ним,
//     значит мы нашли искомый объект, поэтому бросаем дальнейший поиск и возвращаем значение */
//     if (desiredObjIndex !== false) {
//       return data[desiredObjIndex];
//     }
//   }
//   /* если мы оказались здесь значит ни один из объектов из массива data
//   так и не подошел под необходимый требования, поэтому возвращаем null */
//   return null;
// };

/* данный вариант реализации findWhere все равно продолжит поиск в цикле for of
даже если уже известно, что текущий объект из data нам не подходит */
// const findWhere = (data, where) => {
//   const whereKeys = Object.keys(where);
//   for (let i = 0; i < data.length; i += 1) { // проходимся по каждому объекту из массива data
//     let desiredObjIndex = i; // предположим, что текущий объект из массива data явл. искомым объектом
//     for (const keyFromWhere of whereKeys) { // проверяем каждый ключ из аргумента объекта where
//       if (data[i].hasOwnProperty(keyFromWhere)) { // если найдено совпадение по ключам,
//         if (data[i][keyFromWhere] !== where[keyFromWhere]) { // то проверяем значения на идентичность
//           /* если хотя бы одно значение по ключам в объектах не совпадает, то
//           текущий объект из data перестает быть претендентом на искомый элемент */
//           desiredObjIndex = false;
//         }
//       }
//     }
//     /* если претендент найден, то возвращаем его */
//     if (desiredObjIndex !== false) {
//       return data[desiredObjIndex];
//     }
//   }
//   return null;
// };

/* teacher solution */
const findWhere = (data, where) => {
  for (const dataItem of data) {
    let find = true;
    const entries = Object.entries(where);
    for (const [key, value] of entries) {
      if (dataItem[key] !== value) {
        find = false;
      }
    }
    if (find) {
      return dataItem;
    }
  }
  return null;
};


/* Понравилось решение вот этого человека https://ru.hexlet.io/code_reviews/202576 - супер делакларативно. */

/* testing */
const data = [
  
  { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
  { title: 'Still foooing', author: 'FooBar', year: 3333 },
  { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];
const where = { author: 'Shakespeare', year: 1611 };
// console.log(findWhere(data, where));

const expected1 = { title: 'Cymbeline', author: 'Shakespeare', year: 1611 };
const where1 = { author: 'Shakespeare', year: 1611 };
console.log(findWhere(data, where1)); // toEqual(expected1); // + GOOD

const where2 = { author: 'undefined', year: 1611 };
console.log(findWhere(data, where2)); // toBefalse();

const expected3 = { title: 'Happy Foo', author: 'FooBar', year: 4444 };
const where3 = { year: 4444 };
console.log(findWhere(data, where3)); // toEqual(expected3);

// console.log(data[3]);
// console.log(data[3].);
// console.log(Object.entries(where));

