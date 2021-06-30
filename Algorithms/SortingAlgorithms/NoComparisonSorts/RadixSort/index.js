const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  if (nums.length < 1) return 0;
  let maxDigits = 1;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  const maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      buckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

console.log(radixSort([4386, 3, 50000, 100000, 23]));
