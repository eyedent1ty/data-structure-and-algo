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

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // return the value of the first node
  peek() {
    return this.first ? this.first.getValue() : this.first;
  }

  // add a new node at the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevTail = this.last;
      this.last = newNode;
      prevTail.setNext(this.last);
    }
    this.length++;
  }

  // remove the node at the beginning
  dequeue() {
    if (this.length === 0) {
      return;
    } else if (this.length === 1) { // set the last to null
      this.last = null;
    }
    this.first = this.first.getNext();
    this.length--;
  }
  
  printQueue() {
    const array = new Array(this.length);
    let currentNode = this.first;
    for (let i = 0; i < array.length; i++) {
      array[i] = currentNode.getValue();
      currentNode = currentNode.getNext();
    }
    return array;
  }
}

module.exports = Queue;