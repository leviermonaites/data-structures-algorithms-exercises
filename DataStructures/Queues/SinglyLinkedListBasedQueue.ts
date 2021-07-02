import Queue from './Queue.ts';
import SinglyLinkedList from '../LinkedLists/SinglyLinkedList/index.ts';

class SinglyLinkedListBasedQueue implements Queue {
  elements: SinglyLinkedList = new SinglyLinkedList();

  clear() { return this.elements.clear() }
  dequeue() { return this.elements.shift() }
  enqueue(el: unknown) { return this.elements.push(el) }
  toArray() { return this.elements.toArray() }
  toString() { return this.elements.toString() }
}

export default SinglyLinkedListBasedQueue;