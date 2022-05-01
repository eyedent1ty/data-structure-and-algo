const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const arrCopy = [];
  array.forEach(function(item) {
    arrCopy.push(item);
  });

  const n = arrCopy.length;

  for (let i = 1; i < n; i++) {
    const key = arrCopy[i];
    let j = i - 1;

    while(j >= 0 && arrCopy[j] > key) {
      arrCopy[j + 1] = arrCopy[j];
      j--;
    }
    arrCopy[j + 1] = key;
  }

  return arrCopy;
}

const sortedArray = insertionSort(numbers);
console.log(sortedArray);