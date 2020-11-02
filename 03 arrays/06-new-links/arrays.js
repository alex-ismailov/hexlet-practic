/* eslint-disable no-param-reassign, import/prefer-default-export */

// BEGIN (write your solution here)
export const reverse = (arr) => {
  const midIndex = Math.floor(arr.length / 2);
  const lastIndex = arr.length - 1;

  for (let i = 0; i < midIndex; i += 1) {
    const tmp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = tmp;
  }

  return arr;
};
// END
