import _ from 'lodash';

// BEGIN (write your solution here)
class inMemoryKV {
  constructor(initial = {}) {
    Object.entries(initial)
      .forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    this.initial = { ...this.initial, [key]: value };
  }

  unset(key) {
    this.initial = _.omit(this.initial, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.initial, key, defaultValue);
  }

  toObject() {
    return this.initial;
  }
}

export default inMemoryKV;
// END
