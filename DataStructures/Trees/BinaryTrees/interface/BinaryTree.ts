import Tree from '../../Tree';
import BinaryNode from '../BinaryNode';
import { AcceptedDataType } from '../types/AcceptedDataType';


interface BinaryTree extends Tree<AcceptedDataType> {
  root: BinaryNode | null;
  insert(value: AcceptedDataType): BinaryNode;
  find(value: AcceptedDataType): BinaryNode | null;
}

export default BinaryTree;