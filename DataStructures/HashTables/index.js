import HashTable from "./HashTable.js";

const hashTable = new HashTable(3, "doubleHashing");
hashTable.add({ key: "Elon Musk", value: 49 });
hashTable.add({ key: "Warren Buffett", value: 90 });
hashTable.add({ key: "Bill Gates", value: 65 });
hashTable.add({ key: "Mark Zuckerberg", value: 36 });
hashTable.add({ key: "Levi Ermonaites", value: 15 });
hashTable.add({ key: "Richard Branson", value: 70 });
console.log(hashTable.add());
console.log(hashTable.search("Warren Buffett"));
console.log(hashTable.delete("Warren Buffett"));
console.log(hashTable);
