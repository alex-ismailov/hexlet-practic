/* Реализуйте класс Cart, представляющего из себя покупательскую корзину. Интерфейс:

-> addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
-> getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
-> getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
-> getCount – возвращает количество товаров в корзине
*/

import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(good, count) {
    this.items.push({ good, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    const items = this.getItems();
    return _.reduce(items, (acc, item) => {
      const { good: { price }, count } = item;
      return acc + price * count;
    }, 0);
  }

  getCount() {
    const items = this.getItems();
    return _.reduce(items, (acc, item) => {
      const { count } = item;
      return acc + count;
    }, 0);
  }
}

// [
//   { good: { name: 'car', price: 3 }, count: 5 },
//   { good: { name: 'car', price: 3 }, count: 5 },
// ]

/* testing */
const cart = new Cart();
console.log(cart.getItems().length); // toHaveLength(0);

cart.addItem({ name: 'car', price: 3 }, 5);
console.log(cart.getItems().length); // toHaveLength(1);
console.log(cart.getCost()); // toBe(15);
console.log(cart.getCount()); // toBe(5);

cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems().length); // toHaveLength(2);
console.log(cart.getCost()); // toBe(35);
console.log(cart.getCount()); // toBe(7);

console.log(cart.getItems());
