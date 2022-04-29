function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}

console.log(isPalindrome('daniel'));