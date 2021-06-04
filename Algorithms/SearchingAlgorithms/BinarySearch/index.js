const numbers = [1, 4, 6, 10, 15, 20, 25, 26, 28, 31, 35];

const bs = (arr, el, i = 0, j = arr.length - 1) => {
  if (i > j) return -1;
  const p = Math.round((j + i) / 2);
  if (arr[p] === el) return p;
  if (arr[p] > el) return bs(arr, el, i, p - 1);
  if (arr[p] < el) return bs(arr, el, p + 1, j);
};

console.log(bs(numbers, 6));
