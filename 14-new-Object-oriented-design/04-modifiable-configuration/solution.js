export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  // BEGIN (write your solution here)
  constructor(options = {}) {
    this.options = { ...Truncater.defaultOptions, ...options };
  }

  truncate(str, newOptions = {}) {
    const currentOptions = { ...this.options, ...newOptions };
    const { separator, length } = currentOptions;

    return length < str.length
      ? `${str.slice(0, length)}${separator}`
      : str;
  }
  // END
}
