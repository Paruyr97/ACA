class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unShift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;

    if (this.length <= 1) {
      return this.head;
    }

    for (let i = 1; i < this.length; i++) {
      current = current.next;
    }

    return current;
  }
}
