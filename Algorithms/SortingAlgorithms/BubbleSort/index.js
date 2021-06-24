const myArr = [8, 1, 2, 3, 4, 5, 6, 7];

const swap = (i, j) => [j, i];

const bubbleSort = (arr) => {
  let swapped;
  for (let i = arr.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(bubbleSort(myArr));
// Worst Case = T = O(n²);
// Best Case = T = O(n);
