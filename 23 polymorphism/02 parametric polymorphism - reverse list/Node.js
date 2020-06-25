class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

export default Node;
