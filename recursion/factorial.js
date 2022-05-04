/*
  Write two functions that finds the factorial of any number.
  One should use recursive, the other should just use a for loop.
*/

function findFactorialRecursive(number) {
  if (number < 3) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 2;
  for (let i = 3; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(30));
console.log(findFactorialIterative(30));