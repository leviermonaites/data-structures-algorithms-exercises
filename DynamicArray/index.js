let arrLength = 10;
let arr = new Array(arrLength);
let lastIndexFree = 0;

const increaseArraySize = () => {
  arrLength *= 2;
  let newArr = new Array(arrLength);
  for (let i = 0; i < arrLength / 2 - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};

const addElementToArray = (el) => {
  if (lastIndexFree === arrLength - 1) {
    arr = increaseArraySize();
  }

  arr[lastIndexFree] = el;
  lastIndexFree++;
};

for (let i = 0; i <= 30; i++) {
  addElementToArray(i * 10);
}

console.log(arr);
