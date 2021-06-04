/*
  Write a recurse function called flatten which accepts an array of arrays and
  returns a new array with all values flattened.
*/

const flatten = (arr, i = 0, originalLength = arr.length) => {
  if (i >= arr.length) return arr;
  // If the index we're checking now is an array, go deeper.
  if (arr[i] instanceof Array) {
    arr = [...arr.slice(0, i), ...flatten(arr, 0, originalLength)];
  } else {
    return flatten(arr, i + 1);
  }

  // return flatten(arr);
};

// console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
