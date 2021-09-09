import SinglyLinkedList from '../LinkedLists/SinglyLinkedList/index';
import Stack from "./Stack";

class SinglyLinkedListBasedStack implements Stack {
  readonly elements: SinglyLinkedList = new SinglyLinkedList();

  clear() { return this.elements.clear() }

  clone() {
    const newStack = new SinglyLinkedListBasedStack();
    let trav = this.elements.head;
    while(trav) {
      const node = {...trav};
      newStack.elements.unshift(node);
      trav = trav.next;
    }
    return newStack;
  }

  contains(el: unknown) { return this.elements.contains(el) }

  peek() { return this.elements.head }
  pop() { return this.elements.shift() }
  push(el: unknown) { this.elements.unshift(el) }

  toArray() { return this.elements.toArray() }
  toString() { return this.elements.toString() }
}


export default SinglyLinkedListBasedStack;
