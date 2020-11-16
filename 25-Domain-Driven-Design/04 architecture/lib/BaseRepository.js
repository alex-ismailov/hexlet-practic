import { exceptions } from "winston";

// BEGIN (write your solution here)
export default class {
  data = []

  save(entity) {
    this.data = [...this.data, entity];
  }

  find(id) {
    const result = this.data.find((entity) => entity.id === id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }
}
// END
