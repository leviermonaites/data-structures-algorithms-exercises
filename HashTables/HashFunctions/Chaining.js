import HashFunctionInterface from "./HashFunctionInterface.js";

class Chaining extends HashFunctionInterface {
  add(element) {
    if (!element)
      throw new Error("You must provide an element to add in the hash table");
    const index = this.hash(element.key) % this.dictionaryLength;
    element.prev = null;
    element.next = null;
    if (this.dictionary._elements[index]) {
      this.dictionary._elements[index].prev = element;
      element.next = this.dictionary._elements[index];
    }
    this.dictionary._elements[index] = element;
    return this.dictionary.elements;
  }

  search(key) {
    const index = this.hash(key) % this.dictionaryLength;
    if (!this.dictionary._elements[index]) return "Element not found!";
    if (this.dictionary._elements[index].key === key)
      return this.dictionary._elements[index];
    for (let i = this.dictionary._elements[index]; key; ) {
      if (!i) return "Element not found!";
      if (i.key === key) return i;
      i = i.next;
    }
  }

  delete(key) {
    // Soon...
  }
}

export default Chaining;
