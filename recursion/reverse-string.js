// This function reverse a string, it solved using recursion

function reverse(str) {
 if (str.length < 2) {
   return str;
 } 
 return reverse(str.substring(1)) + str.charAt(0);
}

console.log(reverse('hello'));