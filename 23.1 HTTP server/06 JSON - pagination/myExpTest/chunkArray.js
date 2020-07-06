const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CHUNK_SIZE = 2;

const chunks = array.reduce((acc, item, i) => {
  if (acc[acc.length - 1].length === CHUNK_SIZE) {
    acc.push([]);
  }
  acc[acc.length - 1].push(item);
  return acc;
}, [[]]);

console.log(chunks);

const splitToChunks = (coll, chunkSize) => coll
  .reduce((acc, item) => {
    if (acc[acc.length - 1].length === chunkSize) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, [[]]);

  console.log(splitToChunks(array, CHUNK_SIZE));
