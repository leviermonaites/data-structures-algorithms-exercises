// const DataArray = [1, 4, 6, 9, 16, 20];
const DataArray = [1, 4, 6, 9, 16, 20, 25, 49, 59, 100, 130, 180, 210, 500, 600, 800, 801, 802, 803, 804, 805, 806];
const findTarget = (arr, target, lstIndex = 0, hstIndex = arr.length - 1) => {
    const middleIndex = Math.ceil((lstIndex + hstIndex) / 2);
    if(target === arr[middleIndex]) return `Here is your data ${arr[middleIndex]}`;
    if(target > arr[middleIndex]) return findTarget(arr, target, middleIndex + 1, hstIndex);
    if(target < arr[middleIndex]) return findTarget(arr, target, lstIndex, middleIndex - 1);
}

console.log(findTarget(DataArray, 6));