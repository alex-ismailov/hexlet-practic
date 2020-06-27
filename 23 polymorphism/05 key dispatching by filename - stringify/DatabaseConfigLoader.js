import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const filePath = path.join(this.pathToConfigs, `database.${env}.json`);
    const configFile = fs.readFileSync(filePath, 'utf-8');
    const configObj = JSON.parse(configFile);

    if (_.has(configObj, 'extend')) {
      const mergedConfigFile = _.merge(this.load(configObj.extend), configObj);
      delete mergedConfigFile.extend;
      return mergedConfigFile;
    }
    return configObj;
  }
}
// END
