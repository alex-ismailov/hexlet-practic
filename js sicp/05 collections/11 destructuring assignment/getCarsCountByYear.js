/* getCarsCountByYear.js
Это упражнение рассчитано на максимальное использование знаний последних уроков.
К сожалению, невозможно тестами убедиться в том, что ваше решение будет содержать деструктивное присваивание или
rest оператор, поэтому вам нужно самостоятельно прикладывать усилия для их использования.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
список машин (в виде обычного js массива с объектами), а возвращает объект, в
котором свойство - это год выпуска, а значение - это количество машин для соответствующего года.

Порядок свойств в результирующем объекте не важен.

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

console.log(getCarsCountByYear(cars));
//  {
//    2010: 1,
//    2012: 1,
//    2013: 1,
//    2014: 2,
//  };
Решите эту задачу, используя итеративный процесс. Он хорош тем, что позволяeт задействовать сразу все, что нужно.

Подсказки
Вам понадобятся:

const [first, ...rest] = arr
const { propertyName } = obj
{ ...acc, [propertyName]: value } */

// const getCarsCountByYear = (cars) => cars.reduce((acc, car) => {
//   const { year } = car;
//   if (!Reflect.has(acc, year)) {
//     acc[year] = 0;
//   }
//   return { ...acc, [year]: acc[year] + 1 };
// }, {});

import { has } from 'lodash';

// const getCarsCountByYear = (cars) => cars.reduce((acc, car) => {
//   const { year } = car;
//   const newCount = has(acc, year) ? acc[year] + 1 : 1;
//   return { ...acc, [year]: newCount };
// }, {});

/* teacher solution */
const getCarsCountByYear = (cars) => {
  const iter = (acc, items) => {
    if (items.length === 0) {
      return acc;
    }

    const [{ year }, ...rest] = items;
    const newCount = has(acc, year) ? acc[year] + 1 : 1;
    const newAcc = { ...acc, [year]: newCount };

    return iter(newAcc, rest);
  };

  return iter({}, cars);
};

export default getCarsCountByYear;

/* testing */
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];

// console.log(getCarsCountByYear(cars));
//  {
//    2010: 1,
//    2012: 1,
//    2013: 1,
//    2014: 2,
//  };
