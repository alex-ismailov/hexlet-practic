import { getX, getY, makePoint } from '@hexlet/points';
// eslint-disable-next-line
import { l, isEmpty, head, tail, toString, cons, car, cdr } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const length = (list) => isEmpty(list) ? 0 : 1 + length(tail(list));
const getDistance = (p1, p2) => Math.sqrt(
  (getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2
);

const calculatePolygonPerimeter = (list) => {
  if (isEmpty(list) || length(list) < 3) {
    return null;
  }
  const firstPoint = head(list);
  const iter = (p1, p2, acc) => {
    if (isEmpty(p2)) {
      return acc + getDistance(firstPoint, p1);
    }
    return iter( head(p2), tail(p2), acc + getDistance(p1, head(p2)) );
  };
  return iter(head(list), tail(list), 0);
};
// END

// testing
const a = makePoint(1, 1);
const b = makePoint(3, 3);
const c = makePoint(4, 1);
const d = makePoint(3, -2);
const e = makePoint(7, -2);
const f = makePoint(9, 0);
const g = makePoint(2, -6);
const h = makePoint(-1, -1);
const i = makePoint(-5, 7);

console.log(calculatePolygonPerimeter(l())); // toBeNull();
console.log(calculatePolygonPerimeter(l(a))); // toBeNull();
console.log(calculatePolygonPerimeter(l(b, c))); // toBeNull();
console.log();
console.log(calculatePolygonPerimeter(l(a, b, c))); // toBeCloseTo(8.064, 3);
console.log(calculatePolygonPerimeter(l(a, c, b))); // toBeCloseTo(8.064, 3);
console.log(calculatePolygonPerimeter(l(b, c, a))); // toBeCloseTo(8.064, 3);
console.log();
console.log(calculatePolygonPerimeter(l(b, f, e, d))); // toBeCloseTo(18.537, 3);
console.log(calculatePolygonPerimeter(l(i, f, g, h))); // toBeCloseTo(39.647, 3);
console.log();
console.log(calculatePolygonPerimeter(l(a, b, f, e, d))); // toBeCloseTo(19.971, 3);
console.log();
console.log(calculatePolygonPerimeter(l(a, b, f, e, d, c))); // toBeCloseTo(22.527, 3);
console.log(calculatePolygonPerimeter(l(a, c, d, e, f, b))); // toBeCloseTo(22.527, 3);
console.log(calculatePolygonPerimeter(l(a, c, d, f, e, d))); // toBeCloseTo(22.921, 3);
console.log(calculatePolygonPerimeter(l(a, c, b, f, e, d))); // toBeCloseTo(22.378, 3);