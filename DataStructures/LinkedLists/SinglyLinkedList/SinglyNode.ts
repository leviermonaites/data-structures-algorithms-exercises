import Node from '../interface/Node.ts';

class SinglyNode implements Node {
  data: unknown;
  next: Node | null = null;

  constructor(data: unknown) {
    this.data = data;
  }
}

export default SinglyNode;
