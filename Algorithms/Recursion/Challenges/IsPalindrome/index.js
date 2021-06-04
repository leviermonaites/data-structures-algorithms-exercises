/*
  Write a recursive function called isPalindrome which returns 
  true if the string passed to it is a palindrome 
  (reads the same forward and backward). 
  Otherwise it returns false.
*/

const isPalindrome = (str, i = 0, j = str.length - 1) => {
  if (i > j) return true;
  if (str[i] !== str[j]) return false;
  return isPalindrome(str, i + 1, j - 1);
};

console.log(isPalindrome("tacocat"));
