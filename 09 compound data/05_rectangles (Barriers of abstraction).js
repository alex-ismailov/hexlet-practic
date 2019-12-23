
// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
consslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

const makeRectangle = (point, width, height) => cons(point, cons(width, height));
const getStartPoint = (rectangle) => car(rectangle);
const getWidth = (rectangle) => car(cdr(rectangle));
const getHeight = (rectangle) => cdr(cdr(rectangle));
const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));
const containsTheOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle);
  if (quadrant(startPoint) !== 2) {
    return false;
  }
  const rightDownPoint = makePoint(
    getX(startPoint) + getWidth(rectangle),
    getY(startPoint) - getHeight(rectangle),
  );
  if (quadrant(rightDownPoint) !== 4) {
    return false;
  }
  return true;
};

// *** my solution without quadrant function
const containsTheOrigin = (rectangle) => {
  const X = car(getStartPoint(rectangle));
  const Y = cdr(getStartPoint(rectangle));
  if (X >= 0 || Y <= 0) {
    return false;
  }
  const opposX = X + getWidth(rectangle);
  const opposY = Y - getHeight(rectangle);
  if (opposX <= 0 || opposY >= 0) {
    return false;
  }
  return true;
};

