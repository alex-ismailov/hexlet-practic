// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttrsLine()}>`;
}

export default function (name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
// END
