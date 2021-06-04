/*
  Write a recursive function called capitalizeWords. 
  Given an array of words, return a new array containing each word capitalized.
*/

const capitalizeWords = (arr, i = 0) => {
  if (i >= arr.length) return arr;
  arr[i] = arr[i].toUpperCase();
  return capitalizeWords(arr, i + 1);
};

const words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));
