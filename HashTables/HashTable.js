import Dictionary from "../Dictionaires/Dictionary.js";
import HashFunctionBuilder from "./HashFunctions/HashFunctionBuilder.js";

class HashTable {
  constructor(dictionaryLength, hashFnType = "chaining") {
    // In order to avoid bugs in the DoubleHashing function, the length must be a prime number by specification of the own function.
    this.dictionary = new Dictionary(dictionaryLength);
    this.dictionaryLength = dictionaryLength;
    this.hashFunctions = new HashFunctionBuilder(hashFnType);
    this._elementsAdded = 0;
  }

  // Chaining method
  add(element) {
    try {
      Reflect.apply(this.hashFunctions.add, this, [element]);
    } catch (e) {
      return "Element rejected. -> We are working as fast as possible to solve the problem, trust me!";
    }
    this._elementsAdded++;
    return "Element added successfully";
  }

  search(key) {
    return Reflect.apply(this.hashFunctions.search, this, [key]);
  }

  delete(key) {
    return Reflect.apply(this.hashFunctions.delete, this, [key]);
  }

  hash(key) {
    // djb2-based.
    let len = key.length;
    let h = 5381;

    for (let i = 0; i < len; i++) {
      h = (h * 33) ^ key.charCodeAt(i);
    }
    return h >>> 0;
  }
}

export default HashTable;
