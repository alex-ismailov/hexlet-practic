/* Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям.
Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке, достаточно знать только три параметра для однозначного задания прямоугольника на плоскости:
координаты левой-верхней точки, ширину и высоту.
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |
Основной интерфейс:

makeRectangle (конструктор) – создает прямоугольник.
Принимает параметры: левую-верхнюю точку, ширину и высоту. Ширина и высота – положительные числа.
Селекторы getStartPoint, getWidth и getHeight
containsOrigin – проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а
находится внутри). Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника
лежат в разных квадрантах (их можно высчитать в момент проверки).

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

Подсказки
Квадрант плоскости — любая из 4 областей (углов), на которые плоскость делится двумя взаимно перпендикулярными прямыми,
принятыми в качестве осей координат. */

import {
  makeDecartPoint, getX, getY, getQuadrant,
} from './07 points (utils for level design)';

const makeRectangle = (point, width, height) => ({ point, width, height });
const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle);
  if (getQuadrant(startPoint) !== 2) {
    return false;
  }

  const rightDownPoint = makeDecartPoint(
    getX(startPoint) + getWidth(rectangle),
    getY(startPoint) - getHeight(rectangle),
  );
  if (getQuadrant(rightDownPoint) !== 4) {
    return false;
  }

  return true;
};

// export {
//   makeRectangle, getStartPoint, getWidth, getHeight, containsOrigin,
// };

/* testing */
const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);
console.log(containsOrigin(rectangle)); // false

const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle2)); // true
