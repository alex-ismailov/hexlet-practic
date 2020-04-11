/* Отрезок — еще один графический примитив.
В коде описывается парой точек, одна из которых — начало отрезка, другая — конец.
Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.

В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и
способны самостоятельно принять решение о том, как она будет реализована.
Напомню, что сделать это можно разными способами и нет одного правильного.

segments.js
Реализуйте и экспортируйте указанные ниже функции:

makeSegment. Принимает на вход две точки и возвращает отрезок.
getMidpointOfSegment. Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
getBeginPoint. Принимает на вход отрезок и возвращает точку начала отрезка.
getEndPoint. Принимает на вход отрезок и возвращает точку конца отрезка.
Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2. */

const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;

const average = (a, b) => (a + b) / 2;

/* ******************************** */
const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });
const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;
const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  const x1 = getX(beginPoint);
  const y1 = getY(beginPoint);
  const x2 = getX(endPoint);
  const y2 = getY(endPoint);

  const midX = average(x1, x2);
  const midY = average(y1, y2);
  const midPoint = makeDecartPoint(midX, midY);

  return midPoint;
};
// То есть координата x "срединной" точки равна (x1 + x2) / 2, а координата y — (y1 + y2) / 2.

/* testing */
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

console.log(getMidpointOfSegment(segment)); // (1.5, 1)
console.log(getBeginPoint(segment)); // (3, 2)
console.log(getEndPoint(segment)); // (0, 0)
