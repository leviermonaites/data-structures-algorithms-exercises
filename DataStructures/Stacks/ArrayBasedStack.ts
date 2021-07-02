import Stack from "./Stack.ts";
class ArrayBasedStack implements Stack {
  elements: Array<unknown> = [];

  clear() {
    this.elements = [];
    return true;
  }

  clone() {
    const newStack = new ArrayBasedStack();
    for(const el of this.elements) {
      newStack.elements.push(el);
    }
    return newStack;
  }

  contains(el: unknown) {
    this.elements.forEach((v) => {
      if (v === el) return true;
    });
    return false;
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  pop() {
    return this.elements.pop();
  }

  push(el: unknown) {
    this.elements.push(el);
    return el;
  }

  toString() {
    let s = "";
    for (let i = this.elements.length - 1; i > 0; i--) {
      if (i === this.elements.length - 1) s += `${this.elements[i]}`;
      else s += `, ${this.elements[i]}`;
    }
    return s;
  }

  toArray() { return [...this.elements] }
}

export default ArrayBasedStack;
