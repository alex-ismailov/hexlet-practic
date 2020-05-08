// BEGIN (write your solution here)
export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    const {
      name,
      attributes,
    } = this;

    const attrs = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');

    return `<${name}${attrs}>`;
  }
}


// END
