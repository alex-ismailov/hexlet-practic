/* Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Принимает на вход любое число аргументов и возвращает функцию, которая, в свою очередь,
принимает на вход любое количество аргументов и так до бесконечности (привет, рекурсия ;)).
Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.
magic() == 0; // true
magic(5, 2, -8) == -1; // true
magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true
Подсказки
Функции это объекты.
Для решения задачи вам понадобится создать ещё одну функцию (внутреннюю). */

const magic = (...numbers) => {
  const sum = numbers.reduce((acc, x) => x + acc, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

/* testing */
console.log(magic(2, 3) + 0); // 5
console.log(magic(2, 3)(3).valueOf()); // 8
console.log(magic(2, 3).valueOf()); // 5
console.log(magic(2)(2) + 0); // 4
console.log(magic(2, 3) + 0); // 5
console.log('*************');
const val = (magic(2, 2) + 3).valueOf();
console.log(val); // 7
console.log(magic() + 0); // toBe(0);
console.log(magic() + 1); // toBe(1);
console.log(magic(5, 2, -8) + 2); // toBe(1);
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8); // toBe(30);
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7); // toBe(20);
console.log('*************');
magic(1, 3, 4);
console.log(magic(5) + 1); // toBe(6);
console.log('*************');
const func = magic(4, 5);
console.log(func(5) + 1); // toBe(15);
console.log(func(5) + 1); // toBe(15);
