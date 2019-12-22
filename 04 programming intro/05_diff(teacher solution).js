const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
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