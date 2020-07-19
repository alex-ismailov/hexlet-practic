import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// BEGIN (write your solution here)
// 1. принимает на вход путь до файла конфигурации в формате либо json либо yaml
export default class ConfigFactory {
  static parsers = {
    json: JsonParser,
    yaml: YamlParser,
    yml: YamlParser,
  };

  static factory(filepath) {
    const fileExt = path.extname(filepath).split('.')[1];
    const parser = new ConfigFactory.parsers[fileExt]();
    const content = fs.readFileSync(filepath);
    const parsedContent = parser.parse(content);
    return new Config(parsedContent);
  }
}
// END
