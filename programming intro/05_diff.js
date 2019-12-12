const diff = (a, b) => {
  const big = a > b ? a : b;
  const small = a < b ? a : b;
  const res1 = big - small;
  const res2 = small + (360 - big);
  return res1 < res2 ? res1 : res2;
};

// diff testing
const args = [
  [0, 45],
  [0, 180],
  [0, 190],
  [120, 280]
];

args.forEach((arg) => {
  console.log(`diff(${arg[0]}, ${arg[1]}) = ${diff(arg[0], arg[1])}`);
});
