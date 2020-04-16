/* Подобное задание уже было в курсе по абстракциям с помощью данных.
Теперь мы делаем тоже самое, но используя объекты и методы. Нормализацию дробей делать не нужно.

rational.js
Реализуйте и экспортируйте функцию по умолчанию, которая создает рациональное число.
Рациональное число должно быть представлено объектом со следующими методами:

Геттер getNumer - возвращает числитель
Геттер getDenom - возвращает знаменатель
Геттер toString - возвращает строковое представление числа
add - складывает переданные дроби и возвращает новое рациональное число (не мутирует текущее!)

Формула сложения: a / b + c / d = (a * d + b * c) / b * d
*/

const make = (numer, denom) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  add(rational) {
    const a = this.getNumer();
    const b = this.getDenom();
    const c = rational.getNumer();
    const d = rational.getDenom();

    return make((a * d + b * c), b * d);
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
});

/* testing */
const rat1 = make(3, 9);
console.log(rat1.getNumer()); // 3
console.log(rat1.getDenom()); // 9

const rat2 = make(10, 3);

const rat3 = rat1.add(rat2);
console.log(rat3.toString()); // '99/27'
