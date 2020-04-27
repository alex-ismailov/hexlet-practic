// BEGIN (write your solution here)
const make = (name, damage) => (message) => {
  switch (message) {
    case 'getName':
      return name;
    case 'damage':
      return damage;
    default:
      // throw new Error(`undefined method, ${message}`);
      return 'undefined method';
  }
};

export default make;
// END
