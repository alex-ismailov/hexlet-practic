const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const chunkSize = 4;

const chunks = array.reduce((acc, item, i) => {
  if (acc[acc.length - 1].length === chunkSize) {
    acc.push([]);
  }
  acc[acc.length - 1].push(item);
  return acc;
}, [[]]);

console.log(chunks);
