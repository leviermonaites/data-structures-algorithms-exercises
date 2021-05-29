// Write a function called sumZero which accepts a
// sorted array of integers.
// The function should find the first pair where the sum is 0.

const sumZero = (arr) => {
  /*
  Create two variables
  one called i with the initial value 0 (first index of the array).
  one called j with the initial value being equal to the last index of the array.
  */
  let [i, j] = [0, arr.length - 1];

  /*
    Iterate over the array, running a condition that:
      compares the sum of i and j
        if the value is greater than 0 and smaller than j, move j backwards
        if the value is smaller than 0 and greater than i, move i forwards.
        if the value is greater/smaller than 0 and greater/smaller than j/i, break the loop.
        if the value is 0, return an array with arr[i] and arr[j]. 
  */
  while (i < j) {
    if (arr[i] > 0 || arr[j] < 0) break;
    if (arr[i] + arr[j] > 0) j--;
    else if (arr[i] + arr[j] < 0) i++;
    else return [arr[i], arr[j]];
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// T = O(n);
// S = O(1);
