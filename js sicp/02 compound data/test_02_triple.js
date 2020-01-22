/* Кроме пар можно создавать абстрактные типы данных, которые содержат внутри себя три и более элемента.
В данном испытании необходимо реализовать структуру данных тройка, позволяющую хранить три значения.
Как и в случае с парами создаётся конструктор make и селекторы get1, get2, get3, которые будут извлекать
соответствующие значения.

Реализуйте и экспортируйте следующие функции:
make
get1
get2
get3
Пример
const triple = make(3, 5, 'I am element from triple');
get1(triple); // 3
get2(triple); // 5
get3(triple); // I am element from triple */

const make = (a, b, c) => (message) => {
  switch (message) {
    case 'get1':
      return a;
    case 'get2':
      return b;
    case 'get3':
      return c;
  }
};
const get1 = (triple) => triple('get1');
const get2 = (triple) => triple('get2');
const get3 = (triple) => triple('get3');

const triple = make(1, 2, 3);
const triple2 = make('one', 'two', triple);
console.log(get1(triple));
console.log(get2(triple));
console.log(get3(triple));
console.log(get1(triple2));
console.log(get2(triple2));
console.log(get3(triple2));

export {
  make, get1, get2, get3,
};