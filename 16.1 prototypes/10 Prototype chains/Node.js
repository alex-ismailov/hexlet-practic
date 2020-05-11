// BEGIN (write your solution here)
export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  const attrs = Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`);
  return attrs.length > 0 ? ` ${attrs.join(' ')}` : '';
};
// END
