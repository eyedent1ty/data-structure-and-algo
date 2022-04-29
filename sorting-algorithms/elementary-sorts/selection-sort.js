function selectionSort(arr) {

  const arrCopy = [];
  arr.forEach(function(item) {
    arrCopy.push(item);
  });

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    // Current Lowest
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arrCopy[min] > arrCopy[j]) {
        // Update the current lowest
        min = j;
      }
    }
    // Swap
    const temp = arrCopy[i];
    arrCopy[i] = arrCopy[min];
    arrCopy[min] = temp;
  }

  return arrCopy;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedArray = selectionSort(arr);
console.log(sortedArray);