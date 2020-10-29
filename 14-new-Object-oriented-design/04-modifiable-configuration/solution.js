export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  // BEGIN (write your solution here)
  constructor(options = {}) {
    this.options = { ...Truncater.defaultOptions, ...options };
  };

  truncate(str, newOptions = {}) {
    console.log(this.options)
    const currentOptions = { ...this.options, ...newOptions };
    const { separator, length } = currentOptions;

    return `${str.slice(0, length)}${separator}`;
  }
  // END
}

// =============

const sep = new Truncater();
console.log(sep.truncate('one two'));
// console.log(sep.truncate('one two', { length: 6 }));
