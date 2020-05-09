// BEGIN (write your solution here)
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttrsStrLine() {
    return Object.keys(this.attributes).map((key) => ` ${key}="${this.attributes[key]}"`).join('');
  }
}
// END
