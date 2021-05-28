const charCount = (str) => {
  // Do something only if the input is valid.
  if (!str) return {};

  // Create charsObj that we're going to use along the code
  const charsObj = {};

  /* 
    Iterate over the string
      Verify whether the character is valid to go into our object.
      Verify whether the character doens't already existe into our object
        If it does, just add one to the counter.
        If it doesn't, create a key using the char and initialize it to 0.
  */

  for (let char of str) {
    if (/[a-z]|[0-9]/i.test(char)) {
      char = char.toLowerCase();
      charsObj[char] = charsObj[char]++ || 1;
    }
  }

  // Return object at the end.
  return charsObj;
};

console.log(charCount("Hello my friend."));
console.log(charCount("Your code is $#2*124*("));
