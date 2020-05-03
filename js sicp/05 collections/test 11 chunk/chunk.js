/* chunk.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число,
которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности. */

// const chunk = (coll, chunkSize) => {
//   const iter = (acc, iChunk, rest) => {
//     if (rest.length === 0) {
//       return iChunk.length === 0
//         ? acc
//         : [...acc, iChunk];
//     }

//     const [first, ...newRest] = rest;
//     iChunk.push(first);

//     if (iChunk.length === chunkSize) {
//       return iter([...acc, iChunk], [], newRest);
//     }

//     return iter(acc, iChunk, newRest);
//   };

//   return iter([], [], coll);
// };

/* teacher solution */
const chunk = (coll, chunkSize) => {
  const iter = (collRest, acc = []) => {
    if (collRest.length === 0) {
      return acc;
    }
    return iter(
      collRest.slice(chunkSize),
      [...acc, collRest.slice(0, chunkSize)],
    );
  };

  return iter(coll);
};

export default chunk;

/* testing */
// console.log('***');
// console.log(chunk(['a', 'b', 'c', 'd'], 2)); // → [['a', 'b'], ['c', 'd']]
// console.log(chunk(['a', 'b', 'c', 'd'], 3)); // → [['a', 'b', 'c'], ['d']]
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2)); // → [['a', 'b'], ['c', 'd']]
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)); // → [['a', 'b'], ['c', 'd']]
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 4)); // → [['a', 'b'], ['c', 'd']]
