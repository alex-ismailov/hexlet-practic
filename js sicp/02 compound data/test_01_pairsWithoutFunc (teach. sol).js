const factor = (base, value) => {
  if (value % base !== 0) {
    return 0;
  }
  return 1 + factor(base, value / base);
};

const cons = (a, b) => (2 ** a) * (3 ** b);
const car = (pair) => factor(2, pair);
const cdr = (pair) => factor(3, pair);

//Testing
const args = [
  ['cons(0, 0)', cons(0, 0)],
  ['cons(1, 0)', cons(1, 0)],
  ['cons(0, 1)', cons(0, 1)],
  ['cons(1, 1)', cons(1, 1)],
  ['cons(5, 8)', cons(5, 8)],
  ['cons(27, 31)', cons(27, 31)],
  ['cons(13, 11)', cons(13, 11)],
  ['cons(9, 10)', cons(9, 10)],
  ['cons(113, 5)', cons(113, 5)],
  ['cons(5, 0)', cons(5, 0)],
  ['cons(2, 0)', cons(2, 0)],
  ['cons(32, 0)', cons(32, 0)],
  ['cons(32, 1)', cons(32, 1)],
  ['cons(32, 2)', cons(32, 2)],
  ['cons(32, 7)', cons(32, 7)],
  ['cons(32, 33)', cons(32, 33)],
  ['cons(32, 34)', cons(32, 34)], // Maximum call stack size exceeded
];

args.forEach((param) => {
  console.log('-------------------------');
  console.log(`car(${param[0]}) = ${car(param[1])}`);
  console.log(`cdr(${param[0]}) = ${cdr(param[1])}`);
});

