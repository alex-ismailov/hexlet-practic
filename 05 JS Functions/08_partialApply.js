const partialApply = (fn, arg2) => (arg1) => fn(arg1, arg2);
const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
const f2 = partialApply((a, b) => a * b, 5);

// f1 & f2 testing
const args = [1, 10, 3, 4];
args.forEach((arg) => {
  console.log(`f1(${arg}) = ${f1(arg)}\n------------------`);
  console.log(`f2(${arg}) = ${f2(arg)}\n------------------`);
});

