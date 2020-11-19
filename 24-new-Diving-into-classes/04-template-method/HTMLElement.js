export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = Object.entries(attributes);
  }

  stringifyAttributes() {
    if (this.attributes.length === 0) {
      return '';
    }

    const line = this.attributes
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(' ');

    return ` ${line}`;
  }
}
