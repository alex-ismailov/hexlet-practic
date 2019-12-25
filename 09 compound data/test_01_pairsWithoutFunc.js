const cons = (a, b) => (2 ** a) * (3 ** b);

const minIntQuotient = (n, divisor) => {
  if (n % divisor !== 0) {
    return n;
  }
  return minIntQuotient(n / divisor, divisor);
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
];

args.forEach((param) => {
  console.log('-------------------------');
  console.log(`car(${param[0]}) = ${car(param[1])}`);
  console.log(`cdr(${param[0]}) = ${cdr(param[1])}`);
});
