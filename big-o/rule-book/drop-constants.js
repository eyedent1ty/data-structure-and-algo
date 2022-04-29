function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);

  let index = 0;
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for(let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

/*
  This function has a Big O(1 + n/2 + 100)
  Drop the constant it will be Big O(n)
*/


function compressBoxesTwice(boxes) {
  boxes.forEach(function(box) {
    console.log(box);
  });

  boxes.forEach(function(box) {
    console.log(box);
  });
}

/*
  This function has a Big O(2n)
  Drop the constant it will be Big O(n)
*/