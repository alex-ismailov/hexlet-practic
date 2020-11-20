import HTMLElement from './HTMLElement.js';

// BEGIN (write your solution here)
class HTMLPairElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    const tagName = this.getTagName();
    const body = this.getTextContent();

    return `<${tagName}${attrLine}>${body}</${tagName}>`;
  }

  getTextContent() {
    return this.body ?? '';
  }

  setTextContent(body) {
    this.body = body;
  }
}
// END
export default HTMLPairElement;
