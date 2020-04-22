/* Реализуйте и экспортируйте по умолчанию функцию console.log(sumIntervals2, которая принимает на вход массив интервалов и
возвращает сумму всех длин интервалов. В данной задаче используются только интервалы целых чисел от -100 до 100 ,
которые представлены в виде массива. Первое значение интервала всегда будет меньше, чем второе значение.
Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна 0.
Пересекающиеся интервалы должны учитываться только один раз.
*/
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const sumIntervals = (intervals) => {
  const sortedIntervals = intervals.sort(([start1], [start2]) => start1 - start2);
  let acc = 0;
  let [[prevEnd]] = sortedIntervals;
  for (let [start, end] of sortedIntervals) {
    if (start < prevEnd) {
      start = prevEnd;
    }
    if (end < prevEnd) {
      end = prevEnd;
    }
    acc += end - start;
    prevEnd = end;
  }
  return acc;
};

const sumIntervals2 = (intervals) => {
  const checked = [];
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!checked.includes(i)) {
        checked.push(i);
      }
    }
  }
  return checked.length;
};

/* testing */
console.log(sumIntervals([
  [5, 5],
])); // 0

console.log(sumIntervals([
  [-100, 0],
])); // 100

console.log(sumIntervals([
  [1, 2],
  [11, 12],
])); // 2

console.log(sumIntervals([
  [2, 7],
  [6, 6],
])); // 5

console.log(sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4],
])); // 11

console.log(sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
])); // 130

console.log('************');

console.log(sumIntervals2([
  [5, 5],
])); // 0

console.log(sumIntervals2([
  [-100, 0],
])); // 100

console.log(sumIntervals2([
  [1, 2],
  [11, 12],
])); // 2

console.log(sumIntervals2([
  [2, 7],
  [6, 6],
])); // 5

console.log(sumIntervals2([
  [1, 9],
  [7, 12],
  [3, 4],
])); // 11

console.log(sumIntervals2([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
])); // 130
