const Stack = require('./stack'); // Implemented using linked list
const Stack2 = require('./stack-array.js') // Implement using array

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');

myStack.pop();

console.log(myStack.printStack());
