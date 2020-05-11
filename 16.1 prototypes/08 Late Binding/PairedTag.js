// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  const content = this.children.length > 0
    ? this.children.join('')
    : this.body;

  return `<${this.name}${this.getAttrsLine()}>${content}</${this.name}>`;
}

export default function (name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
// END
