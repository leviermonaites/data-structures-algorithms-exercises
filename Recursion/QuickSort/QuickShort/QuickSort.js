const numbers = [0, 2, 0, 0, 3, 0, 1, 2, 1, 4, 2, 1, 0, 2, 1, 0, 3, 4, 0];

const swap = (i, j) => [j, i];

const partition = (arr, l, r) => {
  const pivot = arr[r];
  let i = l - 1;
  for(let j = l; j < r; j++) {
    if(arr[j] < pivot) {
      i += 1;
      [arr[i], arr[j]] = swap(arr[i], arr[j]);
    }
  }
  [arr[i+1], arr[r]] = swap(arr[i + 1], arr[r]);
  return i + 1;
};

const qs = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) return;
  const p = partition(arr, l, r);
  qs(arr, l, p - 1);
  qs(arr, p + 1, r);
  return arr;
};

console.log(qs(numbers));
