export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    // BEGIN (write your solution here)
    const attrLine = Object.keys(this.attributes)
      .map((key) => ` ${key}="${this.attributes[key]}"`)
      .join('');

    return attrLine;
    // END
  }
}
