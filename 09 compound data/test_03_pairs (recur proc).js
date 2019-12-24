const length = (str) => str.length;
const separator = '\t';
const cons = (a, b) => `${a}${separator}${b}`;

const getSeparatorIndex = (str) => {
  const iter = (i) => str[i] === separator ? i : iter(i + 1);
  return iter(0);
};

const getValue = (pair, begin, end) => {
  const iter = (acc, i) => {
    if (i >= end) {
      return acc;
    }
    const newAcc = `${acc}${pair[i]}`;

    return iter(newAcc, i + 1);
  };
  return iter('', begin);
};

const car = (pair) => getValue(pair, 0, getSeparatorIndex(pair));
const cdr = (pair) => getValue(pair, getSeparatorIndex(pair) + 1, length(pair));

// testing
const pair = cons('comp', 'ram');
console.log('car(pair) = ' + car(pair));
console.log('cdr(pair) = ' + cdr(pair));