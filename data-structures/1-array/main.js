const strings = ['a', 'b', 'c', 'd']; 

strings[2]; // O(1)

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)
strings.pop();

// unshift
strings.unshift('x'); // O(n) - add an element to the array as the first element, then adjust the rest of the elements, adjusting the indices of all elements takes O(n) time

// splice
strings.splice(2, 0, 'alien'); // O(n/2) = O(n)

console.log(strings);

// There is so many methods that available in the instance of the array