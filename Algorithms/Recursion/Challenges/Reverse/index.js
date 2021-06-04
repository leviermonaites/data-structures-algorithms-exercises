/*
  Write a function called reverse which accepts a string and 
  returns a new string in reverse
*/

const reverse = (str, i = str.length - 1, builtString = "") =>
  i < 0 ? builtString : "" + reverse(str, i - 1, builtString + str[i]);

console.log(reverse("awesome"));
