import Tree from '../../Tree';
import BinaryNode from '../BinaryNode';

interface BinaryTree extends Tree {
  root: BinaryNode | null;
  insert(value: number): BinaryNode;
  find(value: number): BinaryNode | null;
}

export default BinaryTree;