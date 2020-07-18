export default class Config {
  constructor(data = {}) {
    this.data = data;
  }

  getValue(key) {
    const result = this.data[key];
    if (result instanceof Object) {
      return new Config(result);
    }
    return result;
  }
}
