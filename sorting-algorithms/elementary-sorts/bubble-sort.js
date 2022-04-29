function bubbleSort(arr) {

  const arrCopy = [];
  arr.forEach(function(item) {
    arrCopy.push(item);
  });

  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy.length; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        // Swap numbers
        let temp = arrCopy[j];
        arrCopy[j] = arrCopy[j + 1];
        arrCopy[j + 1] = temp;
      }
    }
  }
  return arrCopy;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedArray = bubbleSort(arr);
console.log(sortedArray);