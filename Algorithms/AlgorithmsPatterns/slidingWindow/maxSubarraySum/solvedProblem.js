// Find the largest sequence resulting in the largest sum in an array of integers.
// The size of the sequence is defined by a parameter num

const maxSubarraySum = (arr, num) => {
  /*
    Evaluate base cases before beginning the actual code.
      arr should not be empty
      num must be greater than 0
      num must be passed
      arr.length should be greater than num

    If any of these are false, return null
  */
  if (num < 0 || !num || num > arr.length) return null;

  /*
    Create one variable called maxSum to store the largest possible sum found in the code.
  */
  let maxSum = 0;

  /*
    Create a for loop to iterate over the array 
    from index 0 until index num - 1 and add up the value found to maxSum
  */
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  /*
    Create another variable called tempSum to compare its value with maxSum 
    along the code and evaluate which of them is greater with the initial value to maxSum
  */
  let tempSum = maxSum;

  /*
    Create another for loop, now going from index "num" at the starting point
    Go until arr.length - num - 1 so that the code doesn't try to take undefined values into account (values outside the array)
  */
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  // Return maxSum
  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 2)); // Expected output: 15
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // Expected output: 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // Expected output: 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // Expected output: 13
console.log(maxSubarraySum([], 4)); // Expected output: null
// T = O(n);
// S = O(1);
