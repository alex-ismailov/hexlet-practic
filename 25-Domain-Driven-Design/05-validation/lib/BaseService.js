export default class {
  constructor(repositories, validate) {
    this.validate = validate;
    Object.keys(repositories).forEach((name) => {
      this[name] = repositories[name];
    });
  }
}
