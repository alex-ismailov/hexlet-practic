// BEGIN (write your solution here)
export default (text) => {
  let word = [];
  const result = [];
  let state = 'beforeFirstWord'; // insideFirstWord, after

  for (let i = 0; i < text.length; i += 1) {
    const symbol = text[i];
    switch (state) {
      case 'beforeFirstWord':
        if (symbol !== ' ' && symbol !== '\n') {
          state = 'insideFirstWord';
          word.push(symbol);
        }
        break;
      case 'insideFirstWord':
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join(''));
          word = [];
          state = symbol === ' ' ? 'afterFirstWord' : 'beforeFirstWord';
        } else {
          word.push(symbol);
        }
        break;
      case 'afterFirstWord':
        if (symbol === '\n') {
          state = 'beforeFirstWord';
        }
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  if (word.length > 0) {
    result.push(word.join(''));
  }

  return result;
};
// END
