import fs from 'fs';
import _ from 'lodash';

class FileKV {
  constructor(filePath, initial = {}) {
    this.filePath = filePath;
    Object.entries(initial)
      .forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = { ...data, [key]: value };
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }

  unset(key) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = _.omit(data, key);
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }

  get(key, defaultValue = null) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return _.get(data, key, defaultValue);
  }

  toObject() {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return data;
  }
}

export default FileKV;
