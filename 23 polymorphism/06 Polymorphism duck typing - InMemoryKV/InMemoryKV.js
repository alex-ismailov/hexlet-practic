import _ from 'lodash';

// BEGIN (write your solution here)
class inMemoryKV {
  constructor(initial = {}) {
    this.map = _.cloneDeep(initial);
  }

  set(key, value) {
    this.map[key] = value;
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.map, key, defaultValue);
  }

  toObject() {
    return this.map;
  }
}

export default inMemoryKV;
// END
