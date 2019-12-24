const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b; 
  }
};
const car = pair => pair('car');
const cdr = pair => pair('cdr');

const pair = cons(4, 5);
// console.log('car(pair) = ' + car(pair));
// console.log('cdr(pair) = ' + cdr(pair));
// console.log('cons(10, 5)(\'cdr\') = ' + cons(1, 10)('cdr'));
// console.log(`cons('key', 'value')('wrong') = ${cons('key', 'value')('wrong')}`);

const pair1 = cons(cons(1, cons(4, 3)), cons(5, 1));
console.log(cdr(cdr(car(pair1))));