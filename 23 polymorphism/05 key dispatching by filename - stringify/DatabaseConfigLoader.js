import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const fileName = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, fileName);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const config = JSON.parse(raw);

    if (!_.has(config, 'extend')) {
      return config;
    }

    const newEnv = config.extend;
    const extension = this.load(newEnv);
    const configWithoutExtend = _.omit(config, 'extend');
    return _.merge(extension, configWithoutExtend);
  }
}
// END
