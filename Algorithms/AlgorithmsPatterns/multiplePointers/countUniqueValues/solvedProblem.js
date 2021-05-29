// Implement a function called "countUniqueValues", which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the arrays, but it will always be sorted.

const countUniqueValues = (arr) => {
  // Base case
  if (!arr.length > 0) return 0;
  /* 
    Create two variables to iterate over the array, 
    one called i with the value of 0 and the other j with the value of 1
  */
  let [i, j] = [0, 1];

  // Create a variable to store how many times uniqueValues were found.
  let counter = 0;

  /*
    Create a loop which will evaluate whether the value at index i and the value at index j are different
    If so, add one to counter.
    If not, continue
    When i is equal to the length of the array breaks the loop.
  */
  while (i < arr.length) {
    if (arr[i] !== arr[j]) counter++;
    i++;
    j++;
  }

  // Return counter at the end.
  return counter;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// T = O(n);
// S = O(1);
