import HashFunctionInterface from "./HashFunctionInterface.js";
import scanf from "scanf";

class DoubleHashing extends HashFunctionInterface {
  add(element) {
    if (DoubleHashing.checkArrayIsTwoPartsFull(this)) {
      // prettier-ignore
      [
        this.dictionary._elements,
        this.dictionaryLength,
      ] = DoubleHashing.resizeArray(
        this.dictionary._elements,
        this.dictionaryLength
      );
    }

    const index = this.hash(element.key) % this.dictionaryLength;
    const c = (this.hash(element.key + "d") % (this.dictionaryLength - 1)) + 1;
    let indexc = (index + c) % this.dictionaryLength;

    if (!this.dictionary._elements[indexc])
      this.dictionary.elements[indexc] = element;
    else {
      for (let i = 1; this.dictionary.elements[indexc]; i++) {
        if (!this.dictionary._elements[indexc])
          this.dictionary._elements[indexc] = element;
        else indexc = (index + i * c) % this.dictionaryLength;
      }
    }

    return element;
  }

  search(key) {
    const index = this.hash(key) % this.dictionaryLength;
    const c = (this.hash(key + "d") % (this.dictionaryLength - 1)) + 1;
    let indexc = (index + c) % this.dictionaryLength;

    if (
      this.dictionary._elements[indexc] &&
      this.dictionary._elements[indexc].key === key
    ) {
      return this.dictionary._elements[indexc];
    } else {
      for (let i = 1; i < this.dictionaryLength; i++) {
        if (
          this.dictionary._elements[indexc] &&
          this.dictionary._elements[indexc].key === key
        ) {
          return this.dictionary._elements[indexc];
        } else indexc = (index + i * c) % this.dictionaryLength;
      }
    }

    return "Element not found";
  }

  delete(key) {
    const index = this.hash(key) % this.dictionaryLength;
    const c = (this.hash(key + "d") % (this.dictionaryLength - 1)) + 1;
    let indexc = (index + c) % this.dictionaryLength;

    if (
      this.dictionary._elements[indexc] &&
      this.dictionary._elements[indexc].key === key
    ) {
      return this.dictionary._elements[indexc];
    } else {
      for (let i = 1; i < this.dictionaryLength; i++) {
        if (
          this.dictionary._elements[indexc] &&
          this.dictionary._elements[indexc].key === key
        ) {
          this.dictionary._elements[indexc] = null;
          return "Deleted sucessfully!";
        } else indexc = (index + i * c) % this.dictionaryLength;
      }
    }

    return "Element not found";
  }

  static resizeArray(arr) {
    console.log(
      "Please insert a prime positive number greater than the former length to resize your array"
    );
    const newLength = scanf("%d");

    const newArr = new Array(newLength);
    arr.forEach((v, i) => (newArr[i] = v));
    return [newArr, newLength];
  }

  static checkArrayIsTwoPartsFull(hashTable) {
    // In order to provide insertion and searching operations with O(1) time complexity, it's helpful to use this method.
    if ((hashTable.dictionaryLength / 3) * 2 <= hashTable._elementsAdded)
      return true;
    else return false;
  }

  static findElement(hashTable, key, methodType) {
    const index = hashTable.hash(element.key) % hashTable.dictionaryLength;
    // prettier-ignore
    const c = (hashTable.hash(element.key + "d") % (hashTable.dictionaryLength - 1)) + 1;
    let indexc = (index + c) % hashTable.dictionaryLength;

    if (!hashTable.dictionary._elements[indexc])
      if (methodType === "add") return indexc;
      else {
        for (let i = 1; hashTable.dictionary.elements[indexc]; i++) {
          if (!hashTable.dictionary._elements[indexc] && methodType === "add")
            return indexc;
          else if (hashTable.dictionary._elements[indexc].key === key) {
            return indexc;
          } else indexc = (index + i * c) % hashTable.dictionaryLength;
        }
      }

    return false;
  }
}

export default DoubleHashing;
