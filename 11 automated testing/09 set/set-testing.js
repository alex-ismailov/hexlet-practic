/* Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором
она изменяет (или добавляет) значение по указанному пути. Функция мутирует объект.

const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
Подсказки
Переиспользуйте объект данных
_.set */

// BEGIN
let data;
let dataCopy;

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  };
  dataCopy = cloneDeep(data);
});

test('plain set', () => {
  set(data, 'a', 10);
  dataCopy.a = 10;
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  set(data, 'a[0].b.c', 333);
  dataCopy.a[0].b.c = 333;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  set(data, 'x', 'new property');
  dataCopy.x = 'new property';
  expect(data).toEqual(dataCopy);
});
// END



/* my testing */
// let data = { 'a': [{ 'b': { 'c': 3 } }] };
// let dataCopy = _.cloneDeep(data);

// _.set(data, 'x[0].y.z', 130);
// dataCopy.a[0].b.c = 130;
// dataCopy.new = 73;
// dataCopy.a[1] = {y: 'y value'};
// console.log(data);
// console.log(dataCopy);