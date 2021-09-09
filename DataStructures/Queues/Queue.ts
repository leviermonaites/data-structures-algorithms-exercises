import LinkedList from '../LinkedLists/interface/LinkedList';

interface Queue {
  readonly elements: Array<unknown> | LinkedList;

  /**
   * Clears the queue.
   */
  clear(): boolean;

  /**
   * Removes the first element in the front of the queue and return its value.
   */
  dequeue(): unknown;

  /**
   * Inserts a new element in the front of the queue.
   * @param data - Any kind of data.
   */
  enqueue(data: unknown): unknown;

  /**
   * Returns an array that represents the current state of the queue
   */
   toArray(): Array<unknown>;

   /**
    * Returns a string that represents the current state of the queue
    */
   toString(): string;

}

export default Queue;