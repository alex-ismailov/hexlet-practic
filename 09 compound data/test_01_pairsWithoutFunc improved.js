const cons = (a, b) => (2 ** a) * (3 ** b);

const getValue = (pair, fDiv, sDiv, pow) => {
  const iter = (n, div, pow) => {
    if (n % div !== 0 && div !== sDiv) {
      return n;
    }
    if (n % div !== 0 && div === sDiv) {
      return pow;
    }
    return iter(n / div, div, pow + 1);
  };

  if (pair <= 3) {
    return iter(pair, sDiv, pow);
  }
  return iter(iter(pair / fDiv, fDiv), sDiv, pow);
};

const car = (pair) => {
  return getValue(pair, 3, 2, 0);
};

const cdr = (pair) => {
  return getValue(pair, 2, 3, 0);
};




//Testing
const args = [
  ['cons(0, 0)', cons(0, 0)],
  ['cons(1, 0)', cons(1, 0)],
  ['cons(0, 1)', cons(0, 1)],
  ['cons(1, 1)', cons(1, 1)],
  ['cons(5, 8)', cons(5, 8)],
  ['cons(27, 31)', cons(27, 31)],
  ['cons(53, 11)', cons(53, 11)],

];

args.forEach((param) => {
  console.log('-------------------------');
  console.log(`car(${param[0]}) = ${car(param[1])}`);
  console.log(`cdr(${param[0]}) = ${cdr(param[1])}`);
});
