// BEGIN (write your solution here)
const swapKeyValue = (map) => {
  const data = map.toObject();
  const entries = Object.entries(data);
  entries.forEach(([key]) => map.unset(key));
  entries.forEach(([key, value]) => map.set(value, key));
};

export default swapKeyValue;
// END
