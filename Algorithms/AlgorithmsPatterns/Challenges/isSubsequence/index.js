/*
  Evaluate whether a given string appears in some way in second given string.
	For example: isSubsequence("Car", "Cpap isn't rad") should return true
*/

const isSubsequence = (str1, str2) => {
  // Base case
  if (!str1) return true;

  /*
    Create two variables
      one called pointerOne and the other pointerTwo, both with the initial value 0.
      pointerOne will represent the indexes of the "str1" and the pointerTwo of the "str2"
  */
  let [pointerOne, pointerTwo] = [0, 0];

  /*
    Create a while loop which will be broken when one of the two pointers outpass the length of its represented string.
    The while loop should return true when str1 was totally overlooped.
  */
  while (true) {
    if (!str1[pointerOne]) return true;
    if (pointerTwo === str2.length) break;
    if (str1[pointerOne].toLowerCase() == str2[pointerTwo].toLowerCase())
      pointerOne++;
    pointerTwo++;
  }

  // Return false as default.
  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "string")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

// T = O(n + m);
// S = O(1);
