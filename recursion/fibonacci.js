/* Given a number N return the index value of the Fibonacci sequence,
where the sequence is:
*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the
// 2 previous values, that means that for N=5 -> 2+3

function fibonacciRecursive(number) { // O(2^n) - Exponential time
  if (number <= 1) {
    return number;
  }
  return  fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

function fibonacciIterative(number) { // O(n)
  const array = [0, 1];
  for (let i = 2; i <= number; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[number];
}

console.log(fibonacciIterative(0));
console.log(fibonacciRecursive(0));

