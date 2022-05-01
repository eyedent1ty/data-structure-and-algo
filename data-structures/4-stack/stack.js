// Stack implemented using linked list

class Node {
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }

}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // return the value of the head node (last)
  peek() {
    return this.top ? this.top.getValue() : this.top;
  }

  // add a new node at the end of the list
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.tail = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.setNext(holdingPointer);
    }
    this.length++;
  }

  // remove the last element in the stack
  pop() {
    if (this.length === 0) {
      return;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.getNext();
    this.length--;
  }

  printStack() {
    const array = new Array(this.length); 
    let currentNode = this.top;
    for (let i = array.length - 1; i >= 0; i--) {
      array[i] = currentNode.getValue();
      currentNode = currentNode.getNext();
    }
    return array;
  }

}

module.exports = Stack;