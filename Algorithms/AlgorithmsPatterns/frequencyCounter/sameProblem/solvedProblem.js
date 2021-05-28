// Given two arrays, return true, if the second array contains all the numbers of the first array squared.

const same = (arr1, arr2) => {
  // Base case
  if (arr1.length !== arr2.length) return false;
  // Create an object called valuesFrequency to store how many times some value appears in one of the two arrays.
  const valuesFrequency = {};

  /* 
    Create two loops (not nested):
      one to store how many times one given value is appearing in the first array with its value squared (we should square the value before we store it).
      and another to evaluate whether the same squared value appears in the second array.
        if it does, reduce the number of times in the valuesFrequency object.
        if it doesn't or the number of times is 0, return false;
  */

  for (let i = 0; i < arr1.length; i++) {
    valuesFrequency[arr1[i] ** 2] = valuesFrequency[arr1[i] ** 2] + 1 || 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!valuesFrequency[arr2[i]]) return false;
    else valuesFrequency[arr2[i]]--;
  }

  // If the function got so far, it means that everything went well.
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
// T = O(n);
// S = O(n / 2) = O(n);
