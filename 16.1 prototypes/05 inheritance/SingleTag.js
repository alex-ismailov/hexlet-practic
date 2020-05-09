// BEGIN (write your solution here)
import Node from './Node';

export default class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }

  toString() {
    const name = this.getName();
    const attributes = this.getAttributes();
    const attributesLine = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');

    return `<${name}${attributesLine}>`;
  }
}
// END
