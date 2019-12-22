/* 
numerals.js
Реализуйте алгоритм числа Zero и операции Succ (увеличение числа на единицу) 
в соответствии с арифметикой Чёрча. Не забудьте про экспорт.
Пример:
const two = Succ(Succ(Zero));
// Немного хитрый способ трансформировать число черча в обычное представление.
// Откровенно говоря, устройство самих чисел еще хитрее ;)
two(x => x + 1)(0); // 2
const four = Succ(Succ(two));
four(x => x + 1)(0); // 4 
*/

const Zero = (fn) => (n) => n;
const toInt = (n) => n(x => x + 1)(0);
// const Succ = (n) => (fn) => (arg) => n(fn)(fn(arg));
const Succ = (n) => (fn) => (arg) => fn(n(fn)(arg));

// const Succ = (n) => (fn) => (arg) => fn(n(fn)(arg))

// solution for hexlet
// BEGIN (write your solution here)
// export const Zero = () => (n) => n;
// export const Succ = (n) => (fn) => (arg) => n(fn)(fn(arg));
// END

console.log(`toInt(Zero) = ${toInt(Zero)}`);
console.log(`toInt(Succ(Zero)) = ${toInt(Succ(Zero))}`);
