import StackInterface from "./StackInterface.js";

class Stack extends StackInterface {
  constructor(length) {
    super(length);
  }

  get stackIsFull() {
    return this._elements[this._stackLength - 1] ? true : false;
  }

  clear() {
    this._elements = new Array(this._stackLength);
    return this._elements;
  }

  clone() {
    return this;
  }

  contains(element) {
    return this._elements.includes(element);
  }

  peek() {
    return this._elements[this._pointer];
  }

  pop() {
    this._elements[this._pointer] = null;
    this._pointer--;
    return this._elements[this._pointer] || "Stack is empty now!";
  }

  push(el) {
    if (!this.stackIsFull) {
      this._pointer++;
      this._elements[this._pointer] = el;
      return this._elements[this._pointer];
    }
    return "Stack is full";
  }

  toArray() {
    if (typeof this.elements === typeof "") {
      return (this.elements = this.elements.split(","));
    }
    return this.elements;
  }

  toString() {
    if (typeof this.elements === typeof []) {
      return (this.elements = this.elements.toString());
    }
    return this.elements;
  }
}

export const createStack = (length) => new Stack(length);

export default Stack;
