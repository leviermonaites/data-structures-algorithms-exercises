const swap = (i, j) => [j, i];

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = swap(arr[j - 1], arr[j]);
      }
    }
  }

  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));

// T = O(n²) - Worst Case
