import DoublyLinkedList from '../LinkedLists/DoublyLinkedList/index.ts';
import DoublyNode from '../LinkedLists/DoublyLinkedList/DoublyNode.ts';

interface Stack {
  length: number;
  readonly elements: DoublyLinkedList;

  clear(): void;

  // Creates a shallow copy of the Stack.
  clone(): void

  // Determines whether an element is in the Stack.
  contains(el: unknown): false | DoublyNode;

  // Returns the object at the top of the Stack without removing it.
  peek(): void;

  // Removes and returns the object at the top of the Stack.
  pop(): void;

  // Inserts an object at the top of the Stack.
  push(el: unknown): void;

  // Copies the Stack to a new array
  toArray(): Array<unknown>;

  // Returns a string that represents the current object
  toString(): string;
}

export default Stack;
