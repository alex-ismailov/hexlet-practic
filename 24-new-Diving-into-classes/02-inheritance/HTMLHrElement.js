import HTMLElement from './HTMLElement.js';

// BEGIN (write your solution here)
export default class HTMLHrElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    return `<hr${attrLine}>`;
  }
}
// END
