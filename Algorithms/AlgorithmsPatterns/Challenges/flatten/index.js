const flatten = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) newArr.push(...flatten(arr[i]));
    else newArr.push(arr[i]);
  }
  return newArr;
};

console.log(flatten([1, [2, [3, 4], [[5]]]]));
