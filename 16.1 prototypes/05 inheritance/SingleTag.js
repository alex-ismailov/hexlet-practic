// BEGIN (write your solution here)
import Node from './Node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttrsStrLine()}>`;
  }
}
// END
