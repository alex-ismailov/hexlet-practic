/*
Point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами x (длина) и y (высота).

Подсказки
Есть разные способы организовать работу абстракции Point. Выберите то, которое считаете нужным,
на основе пройденного материала.
Примеры
const point = new Point(1, 1);

Segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и
endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

Примеры
const segment = new Segment(new Point(1, 1), new Point(10, 11));
solution.js
Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками,
добавленными в обратном порядке (begin меняется местами с end).

Примечания
Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного массива.
То есть они не должны быть ссылкой на один и тот же объект, так как это
разные объекты (пускай и с одинаковыми координатами).

Примеры
const segment = new Segment(new Point(1, 10), new Point(11, -3));
const reversedSegment = reverse(segment);

const reversedSegment.getBeginPoint(); // (11, -3)
const reversedSegment.getEndPoint(); // (1, 10) */

/* ******* point interface ****** */
function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}


/* ******** segment interface ********* */
function getBeginPoint() {
  return this.begin;
}

function getEndPoint() {
  return this.end;
}

function Segment(startPoint, endPoint) {
  this.begin = startPoint;
  this.end = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

/* ***** util function ***** */
const reverse = (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();

  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());

  return new Segment(newBeginPoint, newEndPoint);
};

/* testing */
const point1 = new Point(3, 5);
const point2 = new Point(5, 10);
console.log(point1);
console.log(point1.getX());
console.log(point1.getY());

const segment1 = new Segment(point1, point2);
console.log(segment1);
const reversedSegment = reverse(segment1);
console.log(reversedSegment);
