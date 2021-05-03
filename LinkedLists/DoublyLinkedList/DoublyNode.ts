import Node from '../interface/Node.ts';

class DoublyNode implements Node {
  data: any;
  prev: DoublyNode | null;
  next: DoublyNode | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default DoublyNode;