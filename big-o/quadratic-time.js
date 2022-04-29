// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairs(boxes) {
  boxes.forEach(function(currBox) {
    console.log(`-----${currBox}-----`);
    boxes.forEach(function(nextBox) {
      console.log(currBox, nextBox);
    });
  });
}

logAllPairs(boxes);