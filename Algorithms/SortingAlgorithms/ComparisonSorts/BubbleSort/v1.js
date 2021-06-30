const myArr = [56, 10, 3, 26, 1, 10];

const swap = (i, j) => [j, i];

const bubbleSort = (arr = [], i = 0, j = 1, limit = arr.length) => {
  if (j >= limit && j === 1) return arr;
  if (j === limit) {
    limit--;
    i = 0;
    j = 1;
  } else {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = swap(arr[i], arr[j]);
    }
    i++;
    j++;
  }
  return bubbleSort(arr, i, j, limit);
};

console.log(bubbleSort(myArr));

// T = O(n²);
