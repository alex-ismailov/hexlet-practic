/* location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее к
указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место это массив из двух элементов, где первый элемент это
название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.
import { getTheNearestLocation } from '../location.js';

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим его потренировать.
Поэтому решите эту задачу без обращения к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance. */

/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }
  const distances = [];
  for (const location of locations) {
    const [name, point] = location;
    distances.push(getDistance(point, currentPoint));
  }
  const indexOfNearestLocation = distances.indexOf(Math.min(...distances));

  return locations[indexOfNearestLocation];
};
// END

/* teacher solution */
// export const getTheNearestLocation = (locations, currentPoint) => {
//   if (locations.length === 0) {
//     return null;
//   }

//   let [nearestLocation] = locations;
//   const [, nearestPoint] = nearestLocation;
//   let lowestDistance = getDistance(currentPoint, nearestPoint);

//   for (const location of locations) {
//     const [, point] = location;
//     const distance = getDistance(currentPoint, point);
//     if (distance < lowestDistance) {
//       lowestDistance = distance;
//       nearestLocation = location;
//     }
//   }

//   return nearestLocation;
// };

/* testing */
const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];
console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]
