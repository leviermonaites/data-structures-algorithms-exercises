import Node from '../Node.ts';

class BinaryNode implements Node {
  value: number;
  left: BinaryNode | null = null;
  right: BinaryNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export default BinaryNode;