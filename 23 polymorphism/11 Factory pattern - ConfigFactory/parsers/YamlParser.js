/* eslint-disable class-methods-use-this */

import yaml from 'js-yaml';

// BEGIN (write your solution here)
export default class YamlParser {
  parse(str) {
    return yaml.safeLoad(str);
  }
}
// END
