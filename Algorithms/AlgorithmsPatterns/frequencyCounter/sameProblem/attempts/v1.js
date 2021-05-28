// Given two arrays, return true, if the second array contains all the numbers of the first array squared.

const same = (arr1, arr2) => {
  // Base case
  if (arr1.length !== arr2.length) return false;
  // Create an object called valuesFrequency to store how many times some value appears in one of the two arrays.
  const valuesFrequency = {
    firstArr: {},
    secondArr: {},
  };

  // Create a "valid" flag to use as the return value at the end of the code, with the starting value true.
  let valid = true;

  // Create two for loops (not nested) to store how many that value is appearing in the array.
  for (let i = 0; i < arr1.length; i++) {
    valuesFrequency.firstArr[arr1[i]] =
      valuesFrequency.firstArr[arr1[i]]++ || 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    valuesFrequency.secondArr[arr2[i]] =
      valuesFrequency.secondArr[arr2[i]]++ || 1;
  }

  /* 
  Check whether each key has its squared value with the same times appearing.
    If it does, don't do nothing.
    If it doesn't, change flag to false, and break the loop.
  */
  for (const [num, times] of Object.entries(valuesFrequency.firstArr)) {
    if (valuesFrequency.secondArr[num * num] !== times) {
      valid = false;
      break;
    }
  }

  // Return "valid" flag at the end of the code.
  return valid;
};

console.log(same([1, 2, 3], [4, 1, 9]));
// It works, but three loops, and three objects are not the best both in time complexity and space complexity

// T = O(3n) = O(n)
// S = O(2n) = O(n)
