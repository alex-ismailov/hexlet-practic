// BEGIN (write your solution here)
import Node from './Node';

export default class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const name = this.getName();
    const attributes = this.getAttributes();
    const { body, children } = this;

    const attrs = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
    const content = children.length > 0 ? children.map((child) => child.toString()).join('') : body;

    return `<${name}${attrs}>${content}</${name}>`;
  }
}
// END
