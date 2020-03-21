// const getImpelementation = require('../implementations');

// const makeCart = getImpelementation();

// BEGIN (write your solution here)
let cart;

beforeEach(() => {
  cart = makeCart();
});

test('plain flow', () => {
  cart.addItem({ name: 'car', price: 3 }, 5);
  expect(cart.getItems().length).toEqual(1);
  expect(cart.getCount()).toEqual(5);
  expect(cart.getCost()).toEqual(15);

  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems().length).toEqual(2);
  expect(cart.getCount()).toEqual(7);
  expect(cart.getCost()).toEqual(35);
});

test('terminal case', () => {
  expect(cart.getCount()).toEqual(0);
  expect(cart.getCost()).toEqual(0);
});
// END
