const Queue = require('./queue');

const myQueue = new Queue();
myQueue.enqueue('Google');
myQueue.enqueue('Udemy');
myQueue.enqueue('Discord');

myQueue.dequeue();

console.log(myQueue.printQueue());