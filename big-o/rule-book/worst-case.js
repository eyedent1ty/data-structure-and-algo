const everyone = [
  'nemo',
  'dory',
  'bruce',
  'marlin',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank'
];

function findNemo(array) {
  for(let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(everyone);

// Even though the loop inside the function runs only once, always imagine the worst case scenario
// which is the name 'nemo' was in the last element of the array, the operation needed
// is Linear which is Big O(n)