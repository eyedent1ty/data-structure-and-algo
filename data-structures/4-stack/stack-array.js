// Stack that is implemented using array

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.isEmpty() ? this.array[this.array.length - 1] : null;
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop()
  }

  isEmpty() {
    return !this.array.length
  }

  printStack() {
    return this.array;
  }
}

module.exports = Stack;