/* eslint-disable class-methods-use-this */

import HTMLPairElement from './HTMLPairElement.js';

// BEGIN (write your solution here)
class HTMLDivElement extends HTMLPairElement {
  constructor(attributes) {
    super(attributes);
    this.tagName = 'div';
    this.body = '';
  }

  getTagName() {
    return this.tagName;
  }
}
// END
export default HTMLDivElement;
