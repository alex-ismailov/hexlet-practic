/* Реализуйте и экспортируйте по умолчанию функцию calculateDistance,
которая находит расстояние между двумя точками на плоскости.
Формула расчёта расстояния между двумя точками:
Math.sqrt((x2 - x1) ** 2 + (y2 - y2) ** 2);
*/

const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

/* testing */
const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2)); // 5
