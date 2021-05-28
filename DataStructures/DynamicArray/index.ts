class DynamicArray {
  arr: Array<unknown>;
  len = 0; // length user thinks array is
  private capacity: number; // actual array size.

  constructor(capacity: number) {
    if(capacity < 0) throw new Error("Capacity invalid!");
    this.capacity = capacity;
    this.arr = new Array(capacity);
  }

  get size() { return this.len; }
  get isEmpty() { return this.size == 0; }

  getEl(index: number) { return this.arr[index]; }
  setEl(index: number, elem: unknown) { 
    if(this.capacity >= index) this.arr[index] = elem;
  }

  clear() {
    for(let i = 0; i < this.capacity; i++) {
      this.arr[i] = null;
    }
    this.len = 0;
  }

  add(elem: unknown) {
    if(this.len >= this.capacity) {
      this.resizeArray();  
    }

    this.arr[this.len++] = elem;
  }

  removeAt(index: number) {
    if(index > this.len) return "Element not found!";
    if(index < 0) return "Element not found!";

    this.capacity = --this.len;
    const newArr = new Array(this.capacity);
    for(let i=0, j=0; i <= this.len; i++, j++) {
      if(i == index) j--; // Skip over index by fixing j temporarily
      else newArr[j] = this.arr[i];
    }
    this.arr = newArr;
  }

  remove(el: unknown) {
    for (let i = 0; i < this.len; i++) {
      if(this.arr[i] === el) 
        { this.removeAt(i); return true; }}
    
    return false;
  }

  indexOf(el: unknown) {
    for (let i = 0; i < this.len; i++) {
      if(this.arr[i] === el) {
        return i;
      }
    }
    return -1;
  }

  contains(el: unknown) {
    return this.indexOf(el) !== -1;
  }

  toString() {
    if(this.len == 0) return "[]";

    let sb = "[";
    for(let i = 0; i < this.len; i++) {
      sb = sb.concat(this.arr[i] + ",");
    }
    sb = sb.concat(this.arr[this.len] + " ]");
    return sb;
  }

  private resizeArray() {
    if(this.capacity == 0) this.capacity = 1;

    const newArr = new Array(this.capacity *= 2);
    for(let i = 0; i <= this.len; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;
  }
}

export default DynamicArray;

// Miscelaneous tests.
const dArr = new DynamicArray(10);
for(let i = 1; i <= 30; i++) {
  dArr.add(i);
}

dArr.removeAt(4);

for(let i = 1; i <= 30; i++) {
  dArr.add(i + 30);
}

for(let i = 1; i <= 30; i++) {
  dArr.removeAt(i);
}

console.log(dArr);
console.log(dArr.toString());