const substr = (str, begin = 0, len = str.length) => {
  let res = '';
  let normLen = null;
  let normBegin = null;
  if (len === 0 || begin >= str.length) {
    return res;
  }
  if (len < 0) {
    normLen = 1;
  } else if (len > str.length) {
    normLen = str.length;
  } else {
    normLen = len;
  }
  if (begin < 0) {
    normBegin = 0;
  } else {
    normBegin = begin;
  }
  if ((normBegin + normLen) > str.length) {
    normLen = str.length - normBegin;
  }
  for (let i = 0; i < normLen; i += 1) {
    res += str[normBegin + i];
  }
  return res;
};

// substr testing
const args = [
  ['abba', 0, 1],
  ['abba', 1, 2],
  ['abba', -10, 2],
  ['abba', -1, 100],
  ['abba', -1, -1],
  ['abba', 1, -10],
  ['abba', 1, 10],
  ['abba', 2, 10],
  ['abba', 3, 10],
  ['abba', 4, 10],
  ['abba', 1, 0],
  ['abba', 100, 3],
  [''],
  ['', 2],
  ['', 2, 3],
];
args.forEach((param) => {
  console.log(`substr(${param[0]}, ${param[1]}, ${param[2]}) = ${substr(param[0], param[1], param[2])}`);
});
