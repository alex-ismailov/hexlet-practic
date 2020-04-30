/* Enumerable.js
Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие методы: select, where, orderBy, toArray.

Подсказки
Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
вместо этого необходимо формировать коллекцию из отложенных вычислений. */

class Enumerable {
  // BEGIN (write your solution here)
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

  where(fn) {
    return this.build((coll) => coll.filter(fn));
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

  toArray() {
    return this.operations.reduce((acc, func) => func(acc), this.collection);
  }
  // END
}

export default Enumerable;
