const swap = (i, j) => [j, i];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minVal] > arr[j]) minVal = j;
    }
    if (minVal !== i) [arr[minVal], arr[i]] = swap(arr[minVal], arr[i]);
  }
  return arr;
};

console.log(selectionSort([5, 4, 3, 2, 1]));

// T = O(n²) Worst case
// S = O(1);
