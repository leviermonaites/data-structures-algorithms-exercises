import LinkedList from '../LinkedLists/interface/LinkedList';

interface Stack {
  readonly elements: Array<unknown> | LinkedList;

  clear(): boolean;

  /**
   * Creates a shallow copy of the Stack.
   */
  clone(): Stack;

  /**
   * Returns whether an element is in the Stack. 
   */
  contains(el: unknown): boolean;

  /** 
   * Returns the element at the top of the Stack without removing it.
   */
  peek(): void;

  /** 
   * Removes and returns the element at the top of the Stack.
   */
  pop(): void;

  /**
   * Inserts an element at the top of the Stack and returns the element added.
   * @param el - anything that you want to insert in the top of the stack.
   */
  push(el: unknown): unknown;

  /**
   * Returns an array that represents the current state of the stack
   */
  toArray(): Array<unknown>;

  /**
   * Returns a string that represents the current state of the stack
   */
  toString(): string;
}

export default Stack;
