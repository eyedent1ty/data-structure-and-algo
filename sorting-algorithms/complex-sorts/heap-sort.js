function sort(arr) {
  const arrCopy = [];
  arr.forEach(function(item) {
    arrCopy.push(item);
  });

  const n = arrCopy.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arrCopy, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    const temp = arrCopy[0];
    arrCopy[0] = arrCopy[i];
    arrCopy[i] = temp;

    // call max heapify on the reduced heap
    heapify(arrCopy, i, 0);
  }

  return arrCopy;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i) {
  const largest = i; // Initialize largest as root
  const l = 2 * i + 1; // left = 2*i + 1
  const r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    const swap = arrCopy[i];
    arrCopy[i] = arrCopy[largest];
    arrCopy[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

/* A utility function to print array of size n */
function printArray(arr) {
  const n = arr.length;
  let log = '';
  for (let i = 0; i < n; ++i) {
    log += arr[i] + ' ';
  }
  console.log(log);
}

const arr = [7, 2, 4];
const sortedArr = sort(arr);

printArray(sortedArr);
