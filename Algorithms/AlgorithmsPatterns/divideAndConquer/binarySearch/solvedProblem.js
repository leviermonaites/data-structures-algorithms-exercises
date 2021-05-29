// Given a sorted array and a number, try to find the number in the sorted array without using linear search.

const search = (arr, num) => {
  // Create a variable called p (pivot) with the middle index of the array to guide us about where we should look for our number.
  let [i, j] = [0, arr.length - 1];
  let p = Math.ceil(j / 2);

  // Create a for loop which will:
  // Evaluate whether arr[p] is greater or smaller than num.
  // If it is greater, change the value of j to be p - 1
  // If it is smaller, change the value of i to be p + 1
  // If the value is equal return p.
  while (i < j) {
    if (arr[p] > num) j = p - 1;
    else if (arr[p] < num) i = p + 1;
    else return p;
    p = Math.round((i + j) / 2);
  }

  // If j is greater smaller than i at some point then return - 1.
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // Expected output: 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // Expected output: 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // Expected output: -1

// T = O(log(n));
// S = O(1);
