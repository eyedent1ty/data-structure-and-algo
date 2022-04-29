// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH';

function reverse(str) {
  // check input
  if (typeof str != 'string' || str.length < 2) {
    return;
  } 

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

// Modern and cleaner way to create a reverse-string function
function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');



console.log(reverse('Hi my name is Andrei'));
console.log(reverse2('Hi My name is Andrei'));
console.log(reverse3('Hi My name is Andrei'));