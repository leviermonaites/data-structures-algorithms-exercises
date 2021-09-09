import Node from '../interface/Node';

class SinglyNode implements Node {
  data: unknown;
  next: Node | null | undefined;

  constructor(data: unknown) {
    this.data = data;
  }
}

export default SinglyNode;
