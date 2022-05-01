/*Reverse a string using recursive and iterative approach*/

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.substring(1)) + str.charAt(0);
}

console.log(reverse('Hello'));

