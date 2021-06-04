/*
  Write a function called recursiveRange which accepts a number and
  adds up all the numbers from 0 to the number passed to the function.
*/

const recursiveRange = (num) => (num > 0 ? num + recursiveRange(num - 1) : 0);
console.log(recursiveRange(6)); // 21
