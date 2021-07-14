import Node from "./Node.ts";

interface LinkedList {
  head: Node | null | undefined;
  tail: Node | null | undefined;
  length: number;

  /**
   * Removes all the elements from the Linked List.
   */
  clear(): boolean;

  /**
   * Returns whether an element exists on a Linked List
   */
  contains(unknown: unknown): boolean;

  /**
   * Returns whether the Linked List contains at least one element.
   */
  isEmpty(): boolean;

  /**
   * Removes the tail of the Linked List and returns it, if no tail is found returns undefined.
   */
  pop(): unknown;

  /**
   * Given any type of data, stores a new node at the tail of the Linked List and returns it.
   * @param data - It can be any kind of data.
   */
  push(data: unknown): Node;

  /**
   * Given some data, finds a Node removes it and returns it. If the given data is not found on the LinkedList it returns undefined.
   */
  remove(data: unknown): unknown;

  /**
   * Reverses the order of the Linked List.
   */
  reverse(): boolean;

  /**
   * Given some data, returns the node that it pertains to or undefined based on whether the node is part of the Linked List
   */
  search(data: unknown): Node | undefined;

  /**
   * Removes the head of the Linked List and returns its value, if no head is found returns undefined.
   */
  shift(): unknown;

  /**
   * Given any type of data, stores a new node at the head of the Linked List and returns it.
   * @param data - It can be any kind of data.
   */
  unshift(data: unknown): Node;
}

export default LinkedList;
