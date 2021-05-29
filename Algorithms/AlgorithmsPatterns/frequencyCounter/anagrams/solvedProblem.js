const validAnagram = (str1, str2) => {
  // Base case
  if (str1.length !== str2.length) return false;

  // Create an object called charFrequency to store the str1's values.
  const charFrequency = {};

  // Create a for loop to iterate the str1 and store how many times each does appear in the object charFrequency.
  for (const char of str1) {
    charFrequency[char] = charFrequency[char] + 1 || 1;
  }

  // Create another for loop to evaluate whether the number of times that each char does appear in str2
  // is the same ammount of times that it appears in str1
  // If it's just follow the normal execution.
  // If it's not return false.
  for (const char of str2) {
    if (charFrequency[char]) charFrequency[char]--;
    else return false;
  }

  return true;
};

console.log(validAnagram("iceman", "cinema"));
// T = O(n);
// S = O(n / 2); = O(n);
