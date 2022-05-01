const DoublyLinkedList = require('./doubly-linked-list');

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.insert(0, 2);
myDoublyLinkedList.insert(0, 3);
myDoublyLinkedList.insert(myDoublyLinkedList.length - 1, 50);
myDoublyLinkedList.remove(0);
myDoublyLinkedList.remove(myDoublyLinkedList.length - 1);
console.log(myDoublyLinkedList.printList());
