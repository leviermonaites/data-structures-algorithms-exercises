class DynamicArray {
  arr: Array<any>;
  len: number = 0; // length user thinks array is
  capacity: number; // actual array size.

  constructor(capacity: number) {
    if(capacity < 0) throw new Error("Capacity invalid!");
    this.capacity = capacity;
    this.arr = new Array(capacity);
  }

  get size() { return this.len; }
  get isEmpty() { return this.size == 0; }

  getEl(index: number) { return this.arr[index]; }
  setEl(index: number, elem: any) { 
    if(this.capacity >= index) this.arr[index] = elem;
  }

  clear() {
    for(let i = 0; i < this.capacity; i++) {
      this.arr[i] = null;
    }
    this.len = 0;
  }

  add(elem: any) {
    if(this.len >= this.capacity) {
      this.resizeArray();  
    }

    this.arr[this.len++] = elem;
  }

  removeAt(index: number) {
    if(index > this.len) return "Element not found!";
    let elIndex = index;
    if(index < 0) {
      // Implement negative numbers functionality
      if(this.arr[this.len - index - 1]) {
        elIndex = this.len - index - 1;
      } else return "Element not found!";
    }
    this.capacity = --this.len;
    let new_arr = new Array(this.capacity);
    for(let i=0, j=0; i <= this.len; i++, j++) {
      if(i == elIndex) j--;
      else new_arr[j] = this.arr[i];
    }
    this.arr = new_arr;
  }

  private resizeArray() {
    if(this.capacity == 0) this.capacity = 1;
    else this.capacity *= 2;

    let new_arr = new Array(this.capacity);
    for(let i = 0; i <= this.len; i++) {
      new_arr[i] = this.arr[i];
    }

    this.arr = new_arr;
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