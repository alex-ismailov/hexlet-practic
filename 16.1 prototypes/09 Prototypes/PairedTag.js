// BEGIN (write your solution here)
import Node from './Node';

export default function PairedTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype.toString = function toString() {
  const content = this.children.length > 0
    ? this.children.join('')
    : this.body;

  return `<${this.name}${this.getAttributesAsLine()}>${content}</${this.name}>`;
};
// END
