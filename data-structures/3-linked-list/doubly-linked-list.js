class Node {
  constructor(value) {
    this.value = value;
    this.next = null
    this.prev = null;
  }

  setNext(next) {
    this.next = next;
  }

  setPrev(prev) {
    this.prev = prev;
  }

  getNext() {
    return this.next;
  }

  getPrev() {
    return this.prev;
  }

  getValue() {
    return this.value;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    return !this.length;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.head.setPrev(newNode);
    newNode.setNext(this.head);
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.setPrev(this.tail);
    this.tail.setNext(newNode);
    this.tail = newNode;
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return;
    } else if(this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.length - 1) {
      this.append(value);
      return;
    }

    const holdingPointer = this.traverseToIndex(index);
    const leader = holdingPointer.getPrev();
    leader.setNext(newNode);
    newNode.setPrev(leader);
    holdingPointer.setPrev(newNode);
    this.length++;
  }

  remove(index) {
    if (index >= this.length || this.isEmpty()) {
      return;
    } else if (index === 0) {
      this.head = this.head.getNext();
      this.head.getPrev().setNext(null);
      this.head.setPrev(null);
      this.length--;
      return;
    } else if (index === this.length - 1) {
      this.tail = this.tail.getPrev();
      this.tail.getNext().setPrev(null);
      this.tail.setNext(null);
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.getNext();
    unwantedNode.setPrev(null);
    leader.setNext(null);
    this.tail = leader;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.getNext();
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.getValue());
      currentNode = currentNode.getNext();
    }
    return array;
  }

  printReverseList() {
    const array = [];
    let currentNode = this.tail;
    while (currentNode != null) {
      array.push(currentNode.getValue());
      currentNode = currentNode.getPrev();
    }
    return array;
  }
}

module.exports = DoublyLinkedList;

