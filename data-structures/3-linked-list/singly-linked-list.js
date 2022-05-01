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

  getValue()  {
    return this.value;
  }

}

class SinglyLinkedList {

  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    return !this.length;
  }

  getLength() {
    return this.length;
  }

  // O(1) - add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.setNext(this.head);
      this.head = newNode;
    }
    this.length++;
  }

  // O(1) - add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
    this.length++;
  }

  // O(n) - add a new node to the specified index
  insert(index, value) {

    if (index >= this.length) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.length - 1) {
      this.append(value);
      return;
    } else if (index > 0 && index < this.length) {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(this.length - 1);
      newNode.setNext(leader.getNext());
      leader.setNext(newNode);
    }
    this.length++;
  }

  // O(n) - traversing to the list to find the index of the unwanted node and remove it
  remove(index) {

    if (this.length === 0 || index === this.length - 1) {
      return;
    } 
    
    if (index === 0) {
      this.head = this.head.getNext();
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.getNext();
      leader.setNext(unwantedNode.getNext());
    }

    this.length--;

  }

  // O(n) - traverse to the specified index and return the node
  traverseToIndex(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.getNext();
      currentIndex++;
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.getValue());
      currentNode = currentNode.getNext();
    }

    return array;
  }

}

module.exports = SinglyLinkedList;