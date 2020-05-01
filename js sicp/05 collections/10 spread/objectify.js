/* objectify.js
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Принимает на вход список (в виде обычного js массива с объектами внутри) и функцию-селектор,
выбирающую из каждого объекта определенное значение.
Возвращает объект, в котором ключ - это результат применения функции селектора к каждому объекту в массиве, а
значение - это сам объект.
Обратите внимание на то, что эта функция высшего порядка является универсальной и работает с любыми наборами данных.

const cars = [
  { brand: 'bmw', model: 'm3', year: 2013 },
  { brand: 'opel', model: 'astra', year: 2014 },
  { brand: 'hyundai', model: 'accent', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2013 },
  { brand: 'kia', model: 'sportage', year: 2015 },
];

console.log(objectify(cars, car => car.model));

// {
//   accent: { brand: 'hyundai', model: 'accent', year: 2014 },
//   astra: { brand: 'opel', model: 'astra', year: 2014 },
//   m3: { brand: 'bmw', model: 'm3', year: 2013 },
//   rio: { brand: 'kia', model: 'rio', year: 2013 },
//   sportage: { brand: 'kia', model: 'sportage', year: 2015 },
// };
Подсказки
Используйте динамическое определение свойств:
const propertyName = 'key';
const obj = { [propertyName]: 'value' }; // { key: 'value' }
Решите эту задачу используя reduce
Порядок ключей в объекте при выводе - не важен */

// BEGIN (write your solution here)
export default (items, select) => items.reduce((acc, item) => (
  { ...acc, [select(item)]: item }
), {});
// END
