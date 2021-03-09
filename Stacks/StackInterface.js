class StackInterface {
  constructor(length) {
    this._pointer = -1;
    this._stackLength = length;
    this._elements = new Array(length);
  }

  get pointingAt() {
    return this.elements[pointer];
  }

  get pointer() {
    return this._pointer;
  }

  set pointer(v) {
    return this._pointer;
  }

  get elements() {
    return this._elements;
  }

  set elements(v) {
    return this._elements;
  }

  get stackIsFull() {}

  // Removes all objects from the Stack.
  clear() {}

  // Creates a shallow copy of the Stack.
  clone() {}

  // Determines whether an element is in the Stack.
  contains(element) {}

  // Returns the object at the top of the Stack without removing it.
  peek() {}

  // Removes and returns the object at the top of the Stack.
  pop() {}

  // Inserts an object at the top of the Stack.
  push(element) {}

  // Copies the Stack to a new array
  toArray() {}

  // Returns a string that represents the current object
  toString() {}
}

export default StackInterface;
