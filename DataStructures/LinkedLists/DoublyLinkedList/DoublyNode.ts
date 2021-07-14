import Node from '../interface/Node.ts';

class DoublyNode implements Node {
  data: unknown;
  prev: DoublyNode | null | undefined;
  next: DoublyNode | null | undefined;

  constructor(data: unknown) {
    this.data = data;
  }
}

export default DoublyNode;