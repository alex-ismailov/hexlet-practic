const invertCase = (str) => {
  let invertedCharStr = '';
  for (let i = 0; i < str.length; i += 1) {
    invertedCharStr += str[i] !== str[i].toUpperCase()
      ? str[i].toUpperCase()
      : str[i].toLowerCase();
  }
  return invertedCharStr;
};

// invertCase testing
const args = ['Hello, World!', 'I loVe JS', '', '123'];
args.forEach((str) => {
  console.log(`invertCase(${str}) = ${invertCase(str)}`);
});