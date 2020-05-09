// BEGIN (write your solution here)
export default class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getName() {
    return this.name;
  }

  getAttributes() {
    return this.attributes;
  }
}
// END
