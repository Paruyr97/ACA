class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.unshift(value);
  }

  pop() {
    return this.stack.shift();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  length() {
    return this.stack.length;
  }

  search(el) {
    return this.stack.findIndex((item) => item === el);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  print() {
    console.log(this.stack.join());
  }
}
