const productOfArray = (arr, start = 0) => {
  if (arr.length === 0) return 0;
  if (start >= arr.length) return 1;
  return arr[start] * productOfArray(arr, start + 1);
};

console.log(productOfArray([1, 2, 3, 10]));
