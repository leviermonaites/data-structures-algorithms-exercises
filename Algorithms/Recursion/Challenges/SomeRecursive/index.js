/*
  Write a recurse function called someRecursive which accepts an array and a callback. 
  The function returns true if a single value in the array returns true when passed to the callback. 
  Otherwise it returns false.
*/

const isOdd = (val) => val % 2 !== 0;
const greaterThanTen = (val) => val > 10;

const someRecursive = (arr, cb, i = 0) => {
  if (i >= arr.length) return false;
  if (cb(arr[i])) return true;
  return someRecursive(arr, cb, i + 1);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], greaterThanTen)); // false
