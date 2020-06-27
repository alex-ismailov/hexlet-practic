// BEGIN (write your solution here)
const swapKeyValue = (map) => {
  const mapObj = map.toObject();
  const keysValues = Object.entries(mapObj);
  keysValues.forEach(([key]) => map.unset(key));

  const reversedKeysValues = keysValues
    .map((keyValue) => keyValue.reverse());

  reversedKeysValues.forEach(([key, value]) => {
    map.set(key, value);
  });
};

export default swapKeyValue;
// END
