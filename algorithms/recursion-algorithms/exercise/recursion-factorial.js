/*Write two functions that finds the factorial of any number.
One should use recursive, the other should just use a for loop.*/

function findFactorialRecursive(number) {
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  // code here
  if (number <= 2) {
    return number;
  }
  let answer = 2;
  for (let i = 3; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(4));