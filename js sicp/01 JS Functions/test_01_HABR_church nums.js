// src: https://habr.com/ru/post/322052/


const id = (x) => x;
const double = (f) => (x) => f(f(x));

const True = (t) => (f) => t;
const False = (t) => (f) => f;


// console.assert(1 == True(1)(2));
// console.log(1 == True(1)(2));
// console.log(2 == False(1)(2));

const If = (p) => (t) => (f) => p(t)(f);

// console.log(`(1 == If(True)(1)(2)) = ${1 == If(True)(1)(2)}`);
// console.log(`(2 == If(False)(1)(2)) = ${2 == If(False)(1)(2)}`);

// Арифметика
const Zero = (fn) => (arg) => arg;

const One = (fn) => (arg) => fn(arg);
const Two = (fn) => (arg) => fn(fn(arg));
const Three = (fn) => (arg) => fn(fn(fn(arg)));

// const Succ = (n) => (s => z => s(n(s)(z)));
// Если данная функция кажется сложной, есть альтернативный вариант. 
// Результат его работы будет абсолютно таким же, но накидывание s здесь происходит справа:
const Succ = (n) => s => z => n(s)(s(z));

/* Тут стоит ещё описать способ преобразования чисел Чёрча во всем нам знакомый int — это в точности 
применение функции x => x + 1 к нулю n раз: */

const toInt = (n) => n(x => x + 1)(0);

console.log(`toInt(Zero) = ${toInt(Zero)}`);
console.log(`toInt(Succ(Zero)) = ${toInt(Succ(Zero))}`);
console.log(`toInt(Succ(Succ(Zero))) = ${toInt(Succ(Succ(Zero)))}`);

// console.log(Zero);


// Аналогично определяются операции сложения, умножения и т.д.:
 const Add = (n) => (m) => m(Succ)(n);
 const Mul = (n) => (m) => m(Add(n))(Zero);
 const Pow = (n) => (p) => p(Mul(n))(One);
