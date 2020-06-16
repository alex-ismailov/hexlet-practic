import fs from 'fs';

const functions = {
  right1: fs.readFileSync,
  wrong1: (path) => fs.readdirSync(path),
  wrong2: (path) => {
    if (!fs.existsSync(path)) {
      return;
    }
    fs.readFileSync(path);
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
