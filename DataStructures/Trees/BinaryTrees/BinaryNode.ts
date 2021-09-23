import Node from '../Node';
import { AcceptedDataType } from './types/AcceptedDataType';

class BinaryNode implements Node<AcceptedDataType> {
  value: AcceptedDataType;
  left: BinaryNode | null = null;
  right: BinaryNode | null = null;

  constructor(value: AcceptedDataType) {
    this.value = value;
  }
}

export default BinaryNode;