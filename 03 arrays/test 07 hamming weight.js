/* 
  Вес Хэмминга это количество единиц в двоичном представлении числа.
  Реализуйте и экспортируйте по умолчанию функцию hammingWeight,
  которая считает вес Хэмминга.

  hammingWeight(0); // 0
  hammingWeight(4); // 1
  hammingWeight(101); // 4
*/

const hammingWeight = (number) => {
  let counter = 0;
  const binNumInStrType = number.toString(2);
  for (const symbol of binNumInStrType) {
    counter += Number(symbol);
  }
  return counter;
};

// teacher solution
// const hammingWeight = (num) => {
//   let weight = 0;
//   const digits = num.toString(2).split('');
//   for (let i = 0; i < digits.length; i += 1) {
//     weight += Number(digits[i]);
//   }
//   return weight;
// };

// testing
console.log(hammingWeight(0)); // 0
console.log(hammingWeight(4)); // 1
console.log(hammingWeight(101)); // 4
