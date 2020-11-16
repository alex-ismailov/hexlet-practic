// BEGIN (write your solution here)
export default class {
  constructor() {
    this.repository = [];
  }

  save(entity) {
    this.repository = [...this.repository, entity];
  }

  find(id) {
    return this.repository.find((item) => item.id === id);
  }
}
// END
