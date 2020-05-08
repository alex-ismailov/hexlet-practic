// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const {
      name,
      attributes,
      body,
      children,
    } = this;

    const attrs = Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');
    const content = children.length > 0 ? children.map((child) => child.toString()).join('') : body;

    return `<${name}${attrs}>${content}</${name}>`;
  }
}

// END
