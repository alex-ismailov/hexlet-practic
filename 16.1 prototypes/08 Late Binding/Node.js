// BEGIN (write your solution here)
function getName() {
  return this.name;
}

function getAttrsLine() {
  return Object.keys(this.attributes).map((key) => ` ${key}="${this.attributes[key]}"`).join('');
}

export default function (name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.getName = getName;
  this.getAttrsLine = getAttrsLine;
}
// END
