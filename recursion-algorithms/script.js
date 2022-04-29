const arr = [2, 8, 5];

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
}

function heapify(arr, n, indexOfLargest) {
  const largest = indexOfLargest;
  const left = 2 * largest - 1;
  const right = 2 * largest - 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != indexOfLargest) {
    const swap = arr[largest];
    arr[largest] = arr[indexOfLargest];
    arr[indexOfLargest] = swap;

    heapify(arr, n, 0);
  }
}

buildMaxHeap(arr);
console.log(arr);