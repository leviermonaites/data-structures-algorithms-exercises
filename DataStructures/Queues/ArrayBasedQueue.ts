import Queue from './Queue';

class ArrayBasedQueue implements Queue {
  elements: Array<unknown> = [];

  clear() {
    this.elements = [];
    return true;
  }

  dequeue() { return this.elements.shift() }
  enqueue(data: unknown) { return this.elements.push(data) }

  toArray() { return [...this.elements] }

  toString() {
    let s = "";
    for(let i = 0; i < this.elements.length; i++) {
      if(i < 1) s += `${this.elements[i]}`;
      else s += `, ${this.elements[i]}`;
    }
    return s;
  }
}

export default ArrayBasedQueue;