export default class InputTag {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  render() {
    return `<input type="${this.type}" value="${this.value}">`;
  }

  toString() {
    return this.render();
  }
}
