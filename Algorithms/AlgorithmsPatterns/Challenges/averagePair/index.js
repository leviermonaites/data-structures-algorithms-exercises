// 	Given an array of integers and a target average, try to find two integers within the array which average is equal to the target average.

const averagePair = (arr, avgTarget) => {
  // Base case
  if (!arr.length > 0) return false;

  /*
    Create two variables representing indexes of the array
      one called start and the other called end
      start should be initialized to 0
      end should be initialized to the last index of the array.

      these variables will be used to evaluate whether a pair was found later.
  */
  let [start, end] = [0, arr.length - 1];

  /* 
    Create a while loop and only end it when 
      the end variable is smaller than the avgTarget or
      a pair was found -> return true.
  */
  while (arr[end] > avgTarget) {
    if ((arr[start] + arr[end]) / 2 > avgTarget) end--;
    else if ((arr[start] + arr[end]) / 2 < avgTarget) start++;
    else return true;
  }

  // Return false as default.
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 9, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
