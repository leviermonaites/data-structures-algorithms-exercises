import HashFunctionInterface from "./HashFunctionInterface.js";
import scanf from "scanf";

class DoubleHashing extends HashFunctionInterface {
  add(element) {
    if (!element)
      throw new Error("You must provide an element to add into the hash table");
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

    const index = DoubleHashing.findIndex(this, element.key, "add");
    this.dictionary._elements[index] = element;

    return element;
  }

  search(key) {
    const index = DoubleHashing.findIndex(this, key);
    return index ? this.dictionary._elements[index] : "Element not found";
  }

  delete(key) {
    const indexc = DoubleHashing.findIndex(this, key);

    if (indexc) {
      this.dictionary._elements[indexc] = null;
      return "Deleted sucessfully!";
    } else return "Element not found!";
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
    // In order to provide insertion and searching operations with O(1) time complexity, it's useful make use of this method.
    if ((hashTable.dictionaryLength / 3) * 2 <= hashTable._elementsAdded)
      return true;
    else return false;
  }

  static findIndex(hashTable, key, methodType) {
    const index = hashTable.hash(key) % hashTable.dictionaryLength;
    // prettier-ignore
    const c = (hashTable.hash(key + "d") % (hashTable.dictionaryLength - 1)) + 1;
    let indexc = (index + c) % hashTable.dictionaryLength;

    if (!hashTable.dictionary._elements[indexc] && methodType === "add")
      return indexc;

    for (let i = 2; i < hashTable.dictionaryLength; i++) {
      indexc = (index + i * c) % hashTable.dictionaryLength;

      if (!hashTable.dictionary._elements[indexc]) {
        if (methodType === "add") return indexc;
      } else if (hashTable.dictionary._elements[indexc].key === key) {
        return indexc;
      }
    }

    return false;
  }
}

export default DoubleHashing;
