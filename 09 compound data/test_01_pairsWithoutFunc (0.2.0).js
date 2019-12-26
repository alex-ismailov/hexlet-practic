const cons = (a, b) => (2 ** a) * (3 ** b);

const improve = (n, div) => {
  if (n % (div ** div) !== 0) {
    return n / div;
  }
  return n / (div ** div);
};

const minIntQuotient = (n, divisor) => {
  if (n % divisor !== 0) {
    return n;
  }
  return minIntQuotient(improve(n, divisor), divisor);
};

const getValue = (dividend, divisor, pow) => {
  if (dividend === 1) {
    return pow;
  }
  return getValue(dividend / divisor, divisor, pow + 1);
};

const car = (pair) => {
  return getValue(minIntQuotient(pair, 3), 2, 0);
};
const cdr = (pair) => {
  return getValue(minIntQuotient(pair, 2), 3, 0);
};

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
  //['cons(32, 34)', cons(32, 34)], // Maximum call stack size exceeded
];

args.forEach((param) => {
  console.log('-------------------------');
  console.log(`car(${param[0]}) = ${car(param[1])}`);
  console.log(`cdr(${param[0]}) = ${cdr(param[1])}`);
});

