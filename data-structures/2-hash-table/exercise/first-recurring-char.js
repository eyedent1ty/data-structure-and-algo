// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

function firstRecurringChar(array) {
  const length = array.length;
  const hashMap = {};
  for (let i = 0; i < length; i++) {

    const currKey = array[i];

    // if the property does not exist
    // if (!hashMap[currKey]) {
    //   hashMap[currKey] = 1;
    // } else {
    //   hashMap[currKey]++;
    // }

    if (!hashMap[currKey]) {
      hashMap[currKey] = true;
    } else {
      return currKey;
    }
    
    if(hashMap[currKey] >= 2) {
      return currKey;
    }
  }
  
  return undefined;
}

// Naive Approach O(n^2)
function firstRecurringChar2(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const currChar = array[i];
    for (let j = i + 1; j < length; j++) {
      const nextChar = array[j];
      if (currChar === nextChar) {
        return currChar;
      }
    }
  }
  return undefined;
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));

// console.log(firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringChar2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringChar2([2, 3, 4, 5]));