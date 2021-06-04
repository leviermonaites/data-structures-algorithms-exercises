/*
  Given an array of positive integers and an integer, return the smallest contiguous subarray that you can represent a value which is greater or equal to the passed integer.
*/

const minSubArrayLen = (arr, targetValue) => {
  // Base case
  if (arr.length < 1) return 0;

  const maxSum = arr.reduce(
    (prevValue, currentValue) => (prevValue += currentValue)
  );
  if (!(maxSum >= targetValue)) return 0;

  let counter = arr.length;
  let tempSum = arr[0];
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= targetValue) return 1;
    if (tempSum - arr[i] + arr[j] >= targetValue) {
      tempSum -= arr[i];
      counter = Math.min(counter, j - i);
      i++;
    } else if (tempSum >= targetValue) counter = Math.min(counter, j - i);
    tempSum += arr[j];
  }

  return counter;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 7, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
console.log(minSubArrayLen([], 0)); // 0

// T = O(n);
// S = O(1);
