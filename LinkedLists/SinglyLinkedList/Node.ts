import Node from '../interface/Node.ts';

class SinglyNode implements Node {
  data: any;
  next: Node | null = null;
  constructor(data: any) {
    this.data = data;
  }
}

export default SinglyNode;
