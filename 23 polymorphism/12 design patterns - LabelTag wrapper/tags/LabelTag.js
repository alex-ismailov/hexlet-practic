// BEGIN (write your solution here)
export default class LabelTag {
  constructor(text, innerTag) {
    this.text = text;
    this.innerTag = innerTag;
  }

  render() {
    return `<label>${this.text}${this.innerTag.render()}</label>`;
  }

  toString() {
    return this.render();
  }
}
// END
