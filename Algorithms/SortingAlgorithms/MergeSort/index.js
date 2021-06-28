// const swap = (i, j) => [j, i];

const merge = (arr1, arr2) => {
  const newArr = new Array(arr1.length + arr2.length);
  let [arr1P, arr2P] = [0, 0];
  for (let i = 0; i < newArr.length; i++) {
    if (!arr1[arr1P]) {
      newArr[i] = arr2[arr2P];
      arr2P++;
    } else if (!arr2[arr2P]) {
      newArr[i] = arr1[arr1P];
      arr1P++;
    } else {
      switch (arr1[arr1P] > arr2[arr2P]) {
        case true:
          newArr[i] = arr2[arr2P];
          arr2P++;
          break;
        case false:
          newArr[i] = arr1[arr1P];
          arr1P++;
          break;
      }
    }
  }
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const newArr = merge(
    mergeSort(arr.slice(0, Math.round(arr.length / 2))),
    mergeSort(arr.slice(Math.round(arr.length / 2), arr.length))
  );
  return newArr;
};

const arrayBuilder = () => {
  const newArr = new Array(50);
  for (let i = 0; i < 50; i++) {
    newArr[i] = Math.round(Math.round(Math.random() * 100));
  }
  return newArr;
};

const array = arrayBuilder();

console.log(mergeSort(array));
