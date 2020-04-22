/* Реализуйте и экспортируйте по умолчанию функцию console.log(sumIntervals3, которая принимает на вход массив интервалов и
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

/* teacher solution */
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
/* ***************** */

const sumIntervals3 = (intervals) => intervals.reduce((acc, interval) => {
  const [start, end] = interval;
  for (let i = start; i < end; i += 1) {
    if (!acc.includes(i)) {
      acc.push(i);
    }
  }
  return acc;
}, []).length;

const sumIntervals4 = (intervals) => {
  const sortedIntervals = intervals.sort(([start1], [start2]) => start1 - start2);
  let [[prevEnd]] = sortedIntervals;

  return sortedIntervals.reduce((acc, interval) => {
    let [start, end] = interval;
    if (start < prevEnd) {
      start = prevEnd;
    }
    if (end < prevEnd) {
      end = prevEnd;
    }
    const newVal = acc + end - start;
    prevEnd = end;
    return newVal;
  }, 0);
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

console.log('************');

console.log(sumIntervals3([
  [5, 5],
])); // 0

console.log(sumIntervals3([
  [-100, 0],
])); // 100

console.log(sumIntervals3([
  [1, 2],
  [11, 12],
])); // 2

console.log(sumIntervals3([
  [2, 7],
  [6, 6],
])); // 5

console.log(sumIntervals3([
  [1, 9],
  [7, 12],
  [3, 4],
])); // 11

console.log(sumIntervals3([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
])); // 130

console.log('************');

console.log(sumIntervals4([
  [5, 5],
])); // 0

console.log(sumIntervals4([
  [-100, 0],
])); // 100
