let counter = 0;

function inception() {
  if (counter === 10) {
    return 10;
  }
  counter++;
  return inception();
}

console.log(inception());

/*
1. Identify the base case
2. Identify the recursive case
3. Return when needed (2 returns in a function, base case and recursive case)
*/