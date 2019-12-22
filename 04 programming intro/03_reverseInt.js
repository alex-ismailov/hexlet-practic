const reverseInt = (num) => {
  let resNumStr = '';
  let numStr = String(Math.abs(num));
  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    resNumStr += numStr[i];
  }
  const reversedNum = Number(resNumStr);
  return num < 0 ? -(reversedNum) : reversedNum;
}

// reverseInt testing
const args = [13, -123, 8900, -8900];
args.forEach((num) => {
  console.log(`reverseInt(${num}) = ${reverseInt(num)}`);
});
