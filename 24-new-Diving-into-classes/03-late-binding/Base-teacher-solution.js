export default class Base {
  // BEGIN
  isInstanceOf(className) {
    let isInstance = false;
    let currentObject = this;

    do {
      isInstance = (currentObject.constructor.name === className);
      currentObject = Object.getPrototypeOf(currentObject);
    } while (!isInstance && currentObject !== null);

    return isInstance;
  }
  // END
}