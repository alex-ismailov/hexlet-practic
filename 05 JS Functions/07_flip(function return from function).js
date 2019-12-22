const flip = (term) => (a, b) => term(b, a);

// flip testing
const diff = (a, b) => a - b;
const args = [
  [Math.pow, 1, 2],
  [Math.pow, 3, 2],
  [diff, 5, 3],
];

args.forEach((arg) => {
  // console.log(arg[0](arg[1], arg[2]));
  console.log(`${arg[0].name}(${arg[1]}, ${arg[2]}) = ${arg[0](arg[1], arg[2])}`);
  const flippedTerm = flip(arg[0]);
  console.log(`flipped-${arg[0].name}(${arg[1]}, ${arg[2]}) = ${flippedTerm(arg[1], arg[2])}\n----------------`);
});