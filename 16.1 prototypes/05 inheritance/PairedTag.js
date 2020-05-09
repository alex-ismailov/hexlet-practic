// BEGIN (write your solution here)
import Node from './Node';

export default class extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const content = this.children.length > 0
      ? this.children.join('')
      : this.body;

    return `<${this.name}${this.getAttrsStrLine()}>${content}</${this.name}>`;
  }
}
// END
