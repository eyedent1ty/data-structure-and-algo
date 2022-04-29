const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

const containsCommonItem = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

/*
  O(a * b) - Time Complexity
  O(1) - Space Complexity
*/

const containsCommonItem2 = (arr1, arr2) => {
  const map = {};
  arr1.forEach(item => {
    if (!map[item]) {
      map[item] = true;
    }
  });

  for (item of arr2) {
    if (map[item]) {
      return true; 
    }
  }
  return false;
};

/*
  O(a + b) - Time Compexity
  O(a) - Space Complexity
*/


// console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem(array1, array2));


// Language specific, to become more readable
// Readability somtimes is language specific because of some built in features on the language
const containsCommonItem3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}
console.log(containsCommonItem3(array1, array2))