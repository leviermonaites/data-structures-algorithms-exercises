import Dictionary from "../Dictionaires/Dictionary.js";

class HashTable {
  constructor(dictionaryLength) {
    this.dictionary = new Dictionary(dictionaryLength, this.add);
    this.dictionaryLength = dictionaryLength;
  }

  // Chaining method
  add(element) {
    if (!element)
      throw new Error("You must provide an element to add in the hash table");
    const index = element.key.charCodeAt(0) % this.dictionaryLength;
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
    const index = key.charCodeAt(0) % this.dictionaryLength;
    if (this.dictionary._elements[index].key === key)
      return this.dictionary._elements[index];
    for (let i = this.dictionary._elements[index]; key; ) {
      if (!i) return "Element not found!";
      if (i.key === key) return i;
      i = i.next;
    }
  }
}

const hashTable = new HashTable(8);
hashTable.add({ key: "Elon Musk", value: 49 });
hashTable.add({ key: "Warren Buffett", value: 90 });
hashTable.add({ key: "Bill Gates", value: 65 });
hashTable.add({ key: "Mark Zuckerberg", value: 36 });
hashTable.add({ key: "Jeff Bezos", value: 57 });
hashTable.add({ key: "Larry Ellison", value: 76 });
hashTable.add({ key: "Larry Page", value: 47 });
hashTable.add({ key: "Richard Branson", value: 70 });
console.log(hashTable.search("Larry Page"));
