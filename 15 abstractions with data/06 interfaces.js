/*
В этой задаче, тесты написаны для отрезков, которые в свою очередь используют точки.
Ваша задача, реализовать интерфейсные функции для работы с точками.
Внутреннее представление точек должно быть основано на полярной системе координат,
хотя интерфейс предполагает работу с декартовой системой (снаружи).
Для обозначения координат используются целые числа.

points.js
Реализуйте и экспортируйте интерфейсные функции точек:
makeDecartPoint. Принимает на вход координаты и возвращает точку. Уже реализован.
getX
getY

Подсказки
Трансляция декартовых координат в полярные была описана в теории
Получить x можно по формуле radius * cos(angle)
Получить y можно по формуле radius * sin(angle) */

const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};

const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

// BEGIN (write your solution here)
const getX = (point) => {
  const { radius, angle } = point;
  const x = radius * Math.cos(angle);
  return Math.round(x);
};

const getY = (point) => {
  const { radius, angle } = point;
  const y = radius * Math.sin(angle);
  return Math.round(y);
};
// END

/* testing */
const isParallelWithX = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  return getY(beginPoint) === getY(endPoint);
};

const isParallelWithY = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  return getX(beginPoint) === getX(endPoint);
};

const point1 = makeDecartPoint(3, 2);
const point2 = makeDecartPoint(0, 0);
const point3 = makeDecartPoint(3, -5);
const point4 = makeDecartPoint(10, 2);
const point5 = makeDecartPoint(3, 4);
const point6 = makeDecartPoint(3, 8);
console.log(isParallelWithY(makeSegment(point1, point2))); // toBe(false);
console.log(isParallelWithY(makeSegment(point1, point3))); // toBe(true);
console.log(isParallelWithX(makeSegment(point1, point4))); // toBe(true);
console.log(isParallelWithY(makeSegment(point5, point6))); // toBe(true);
console.log(isParallelWithX(makeSegment(point2, point3))); // toBe(false);
