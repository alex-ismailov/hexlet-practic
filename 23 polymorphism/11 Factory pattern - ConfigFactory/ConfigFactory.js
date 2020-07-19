import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// BEGIN (write your solution here)
const Parsers = {
  json: JsonParser,
  yaml: YamlParser,
  yml: YamlParser,
};

export default class ConfigFactory {
  static factory(filepath) {
    const fileExt = path.extname(filepath).slice(1);
    const parser = new Parsers[fileExt]();

    const rawData = fs.readFileSync(filepath).toString();
    const data = parser.parse(rawData);

    return new Config(data);
  }
}
// END
