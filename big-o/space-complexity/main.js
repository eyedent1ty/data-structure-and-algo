function booooo(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) { // O(1)
    console.log('boooooo!');
  }
}

booooo([1, 2, 3, 4, 5]); // O(1)


function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); // O(n)