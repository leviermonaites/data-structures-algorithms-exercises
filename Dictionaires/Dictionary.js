class Dictionary {
  constructor(length, addMethod) {
    this._elements = new Array(length);
    this._rear = 0;
    if (addMethod instanceof Function) {
      this.add = addMethod;
    }
  }

  add(element) {
    if (this.rear + 1 >= this.elements.length) {
      this._elements[this.rear] = element;
      this._rear++;
    } else {
      console.log("Dictionary full");
    }
    return this.elements;
  }

  get elements() {
    return this._elements;
  }

  set elements(v) {
    return this.elements;
  }

  get rear() {
    return this._rear;
  }

  set rear(v) {
    return this._rear;
  }
}

export default Dictionary;
