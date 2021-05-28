import DoublyLinkedList from '../LinkedLists/DoublyLinkedList/index.ts';
import DoublyNode from '../LinkedLists/DoublyLinkedList/DoublyNode.ts';
import Stack from "./Stack.ts";

class DoublyLinkedListBasedStack implements Stack {
  readonly elements: DoublyLinkedList = new DoublyLinkedList();
  length: DoublyLinkedList["size"] = this.elements.getSize();

  clear() {
    this.elements.clear();
    return "Stack entirely cleaned";
  }

  clone() {
    const newStack = new DoublyLinkedListBasedStack();
    for(let node: DoublyNode | null = this.elements.head; node; node = node ? node.next : null) {
      newStack.elements.add(node);
      node = node.next;
    }
    return newStack;
  }

  contains(el: unknown) {
    return this.elements.contains(el);
  }

  peek() { return this.elements.head }

  pop() {
    const elToRemove = { pointer: this.elements.head };
    this.elements.remove(this.elements.head);
    return elToRemove.pointer;
  }

  push(el: unknown) {
    this.elements.add(el);
  }

  toArray() {
    return this.elements.toArray();
  }

  toString() {
    return `${this.elements.toString()}`;
  }
}

const myStack = new DoublyLinkedListBasedStack();
const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
const e = 'e';
const f = 'f';
const g = 'g';
const h = 'h';
const i = 'i';
const j = 'j';
myStack.push(a);
myStack.push(b);
myStack.push(c);
myStack.push(d);
myStack.push(e);
myStack.push(f);
myStack.push(g);
myStack.push(h);
myStack.push(i);
myStack.push(j);

console.log(myStack.toArray());
console.log(myStack.toString());

export default DoublyLinkedListBasedStack;
