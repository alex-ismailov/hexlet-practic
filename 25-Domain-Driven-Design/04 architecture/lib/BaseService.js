export default class {
  constructor(repositories) {
    Object.keys(repositories).forEach((name) => {
      this[name] = repositories[name];
    });
  }
}
