/* Enumerable.js
Реализуйте метод where, основываясь на следующем интерфейсе:

Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом.
Для функций должна осуществляться простая фильтрация, для объектов нужно проверять соответствие элемента коллекции значениям по
тем же ключам, что и в переданном объекте.

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

const newOpsult = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);

newOpsult.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const newOpsult2 = coll.where({ brand: 'bmw' });
newOpsult2.toArray();
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

const newOpsult3 = coll.where({ brand: 'kia', model: 'sorento' });
newOpsult3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const newOpsult3 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
newOpsult3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const newOpsult4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
newOpsult4.toArray();
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]
Подсказки
Извлечь ключи из объекта можно функцией Object.keys.
Проверка на функцию: typeof <value> === 'function'.
Метод every проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
Подробнее в документации. */

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  // where(...args) {
  //   const newOps = args.reduce((acc, predicate) => {
  //     if (typeof predicate === 'function') {
  //       acc.push((coll) => coll.filter(predicate));
  //       return acc;
  //     }

  //     const predicateFunc = ((car) => {
  //       const predicateObjKeys = Object.keys(predicate);
  //       return predicateObjKeys.every((key) => predicate[key] === car[key]);
  //     });

  //     acc.push((coll) => coll.filter(predicateFunc));

  //     return acc;
  //   }, []);

  //   return this.build(newOps);
  // }

  /* teacher solution */
  where(...args) {
    const newOps = args.map((predicate) => {
      if (typeof predicate === 'function') {
        return (coll) => coll.filter(predicate);
      }
      const predicateObjKeys = Object.keys(predicate);

      return (coll) => coll.filter(
        (car) => predicateObjKeys.every((key) => predicate[key] === car[key]),
      );
    });

    return this.build(newOps);
  }
  // END

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
}

export default Enumerable;
