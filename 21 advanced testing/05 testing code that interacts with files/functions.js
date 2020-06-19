import { promises as fs } from 'fs';
import jsBeautify from 'js-beautify';

const { html: beautify } = jsBeautify;

const functions = {
  right1: async (filepath) => {
    const data = await fs.readFile(filepath, 'utf-8');
    await fs.writeFile(filepath, beautify(data));
  },
  wrong1: async (filepath) => {
    const data = await fs.readFile(filepath, 'utf-8');
    await fs.writeFile(filepath, data);
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
