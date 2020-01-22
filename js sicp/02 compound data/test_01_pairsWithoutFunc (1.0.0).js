const cons = (a, b) => (2 ** a) * (3 ** b);
const improve = (n, div) => {
  if (n % (div ** div) !== 0) {
    return n / div;
  }
  return n / (div ** div);
};
const getValue = (pair, fDiv, sDiv) => {
  const iter = (n, div, pow) => {
    if (n % div !== 0 && div !== sDiv) {
      return n;
    }
    if (n % div !== 0 && div === sDiv) {
      return pow;
    }
    return iter(n / div, div, pow + 1);
  };
  if (pair % fDiv !== 0) {
    return iter(pair, sDiv, 0);
  }
  return iter(iter(improve(pair, fDiv), fDiv), sDiv, 0);
};
const car = (pair) => getValue(pair, 3, 2);
const cdr = (pair) => getValue(pair, 2, 3);

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
  ['cons(32, 1)', cons(32, 2)],


  // ['cons(53, 11)', cons(53, 11)],
  // ['cons(53, 11)', cons(70, 76)],
  // ['cons(90, 83)', cons(90, 83)],

];

args.forEach((param) => {
  console.log('-------------------------');
  console.log(`car(${param[0]}) = ${car(param[1])}`);
  console.log(`cdr(${param[0]}) = ${cdr(param[1])}`);
});

