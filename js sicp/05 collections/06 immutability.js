/* Реализуйте функции select, orderBy используя подход без мутации состояния. */

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const newColl = this.collection.slice();

    newColl.sort((obj1, obj2) => {
      const compareResult = direction !== 'desc' ? 1 : -1;
      const a = fn(obj1);
      const b = fn(obj2);

      if (a === b) {
        return 0;
      }

      return (a < b)
        ? -compareResult
        : compareResult;
    });

    return new Enumerable(newColl);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

// export default Enumerable;

/* testing */
const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);

/* it('select', ()) */
let result = coll.select((car) => car.model);
// let expected = ['m5', 'm4', 'sorento', 'rio', 'sportage'];
console.log(result.toArray()); // .not.toEqual(coll.toArray());
console.log(result.toArray()); // toEqual(expected);

/* it('orderBy', ()) */
result = coll
  .orderBy((car) => car.year)
  .where((car) => car.brand === 'kia');

// expected = [cars[3], cars[4], cars[2]];

console.log(result.toArray()); // .not.toEqual(coll.toArray());
console.log(result.toArray()); // toEqual(expected);

/* it('orderByDesc', ()) */
result = coll
  .orderBy((car) => car.year, 'desc')
  .where((car) => car.brand === 'bmw');

// expected = [cars[0], cars[1]];

console.log(result.toArray()); // .not.toEqual(coll.toArray());
console.log(result.toArray()); // toEqual(expected);
