/*
  Given a string, find its largest no word repeating substring.
*/

const findLongestSubstring = (str) => {
  // Base case
  if (!str) return 0;

  // Create object called charsObj to store whether a char has already appeared in the string.
  let charsObj = {};

  // Create let counter to store how many individual characters were found
  let counter = 0;

  let i = 0;

  // Iterate over the string and do your thing!
  for (let j = 0; j < str.length; j++) {
    if (!charsObj[str[j]]) {
      charsObj[str[j]] = j;
    } else {
      counter = Math.max(counter, j - i);
      i = charsObj[str[j]] + 1;
      charsObj = {};
      charsObj[str[i]] = i;
      charsObj[str[j]] = j;
    }
    if (!str[j + 1]) {
      counter = Math.max(counter, j - i);
    }
  }

  // Return counter at the end
  return counter;
};

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
