import Node from './Node.ts';

interface LinkedList {
  /**
   * Returns the size of the Linked List
   */
  getSize(): number;

  /**
   * Returns whether the Linked List contains at least one element.
   */
  isEmpty(): boolean;

  /**
   * Given a node, returns the node itself or undefined based on whether the node is part of the Linked List
   */
  search(node: Node): Node | undefined;

  /**
   * Given any type of data, stores a new node at the tail of the Linked List.
   * @param data - It can be any kind of data.
   */
  push(data: unknown): Node; 

  /**
   * Given any type of data, stores a new node at the head of the Linked List.
   * @param data - It can be any kind of data.
   */
  unshift(data: unknown): Node;  

  /**
   * Tries to remove the tail of the Linked List, if no tail is found returns undefined.
   */
  pop(): boolean | undefined; 

  /**
   * Tries to remove the head of the Linked List, if no head is found returns undefined.
   */
  shift(): boolean | undefined;

  /**
   * Given a node, finds and removes it. If the given node is not found on the LinkedList it returns undefined.
   */
  remove(node: Node): boolean | undefined;

  /**
   * Removes all the elements from the Linked List.
   */
  clear(): boolean;

  /**
   * Reverses the order of the Linked List.
   */
  reverse(): boolean;
}

export default LinkedList;