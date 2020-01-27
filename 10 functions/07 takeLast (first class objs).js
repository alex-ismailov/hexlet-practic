/* 
  Реализуйте внутреннюю функцию takeLast,
  которая возвращает последние n символов строки в обратном порядке.
  Количество символов передаётся в takeLast вторым параметром.
  Если передаётся пустая строка или строка меньше необходимой длины,
  функция должна вернуть null.
*/

// const run = (text) => {
//   // BEGIN (write your solution here)
//   const takeLast = (str, size) => {
//     const strLength = str.length;
//     if (strLength < size || strLength === 0) {
//       return null;
//     }
//     let acc = '';
//     for (let i = strLength - 1; i >= strLength - size; i -= 1) {
//       acc += str[i];
//     }
//     return acc;
//   };
//   // END

//   return takeLast(text, 4);
// };

/* teacher solution */
const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (str, size) => {
    if (str.length < size) {
      return null;
    }
    const res = [];
    for (let i = str.length - 1; res.length < size; i -= 1) {
      res.push(str[i]);
    }
    return res.join('');
  };
  // END

  return takeLast(text, 4);
};

/* testing */
console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx
