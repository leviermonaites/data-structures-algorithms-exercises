/*
  Given a number of arguments, evaluate whether there is at least one value appearing twice.
*/

const areThereDuplicates = (...params) => {
  // Create an object called values to store how many times each value was received.
  const values = {};

  // Iterate over the params array and for each value store it in the values obj
  // If the value was already there, return true
  for (const param of params) {
    if (values[param]) return true;
    values[param] = 1;
  }

  // return false as default
  return false;
};

console.log(areThereDuplicates("a", "b", "c", "a")); // Expected output: true
console.log(areThereDuplicates(1, 2, 2)); // Expected output: true
console.log(areThereDuplicates(1, 2, 3)); // Expected output: false
