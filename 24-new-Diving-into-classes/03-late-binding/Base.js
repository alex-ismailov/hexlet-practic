/* eslint-disable class-methods-use-this */

export default class Base {
  // BEGIN (write your solution here)
  isInstanceOf(className) {
    if (className === this.constructor.name) {
      return true;
    }

    const protoOfThis = Object.getPrototypeOf(this);

    if (protoOfThis === Object.prototype) {
      return false;
    }

    return protoOfThis.isInstanceOf(className);
  }
  // END
}
