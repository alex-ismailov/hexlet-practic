const sumSquareDifference = (n) => {
  const sumOfSquares = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i += 1) {
      res += (i ** 2);      
    }
    return res;
  };
  const squareOfSum = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i += 1) {
      res += i;      
    }
    return (res ** 2);
  };
  return squareOfSum(n) - sumOfSquares(n);
};

// sumSquareDifference testing
const args = [10, 13, 2, 5, 50];
args.forEach((arg) => {
  console.log(`sumSquareDifference(${arg}) = ${sumSquareDifference(arg)}`);
});
