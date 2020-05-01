/* Enumerable.js
Реализуйте метод toArray, возвращающий массив обработанных элементов коллекции.
Мемоизируйте этот массив во внутреннем свойстве memo.

const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
const filteredColl = coll.where(n => n > 3);

// В этот момент запускаются отложенные операции и результат возвращается.
console.log(filteredColl.toArray()); // [4, 5, 6]

// Повторный запуск извлекает массив из `memo`. Вычисления больше не производятся.
console.log(filteredColl.toArray()); // [4, 5, 6]
Реализуйте свойство length, которое возвращает количество элементов в коллекции.
Так как для вычисления её длины, нужно получить результирующий массив (применив все отложенные операции),
логично реализовать это свойство как getter, который вызывает внутри себя toArray.

const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
filteredColl = coll.where(n => n > 3);

// В этот момент запускаются отложенные операции и результат возвращается.
filteredColl.length; // 3

// Так как toArray мемоизирован, то повторный вызов не приводит к вычислениям, массив берется из memo
filteredColl.length; // 3
 */

/* Enumerable.js
Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие методы: select, where, orderBy, toArray.

Подсказки
Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
вместо этого необходимо формировать коллекцию из отложенных вычислений. */

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build((coll) => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const compareResult = direction !== 'desc' ? 1 : -1;
    const comparator = (obj1, obj2) => {
      const a = fn(obj1);
      const b = fn(obj2);
      if (a === b) {
        return 0;
      }
      return a < b
        ? -compareResult
        : compareResult;
    };

    return this.build((coll) => coll.slice().sort(comparator));
  }

  where(fn) {
    return this.build((coll) => coll.filter(fn));
  }

  // BEGIN (write your solution here)
  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }
    return this.memo.slice();
  }

  get length() {
    return this.toArray().length;
  }
  // END
}

export default Enumerable;
