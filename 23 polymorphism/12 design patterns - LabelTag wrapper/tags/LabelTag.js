// BEGIN (write your solution here)
export default class LabelTag {
  constructor(text, innerTag) {
    this.text = text;
    this.innerTag = innerTag;
  }

  render() {
    // у this.innerTag будет авт. вызван метод toString,
    // так как он (объект) используется как строка
    // https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/to-string/theory_unit
    return `<label>${this.text}${this.innerTag}</label>`;
  }

  toString() {
    return this.render();
  }
}
// END
