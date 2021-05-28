import Node from '../interface/Node.ts';

class DoublyNode implements Node {
  data: unknown;
  prev: DoublyNode | null;
  next: DoublyNode | null;

  constructor(data: unknown) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default DoublyNode;