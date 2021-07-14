import Tree from '../../Tree.ts';
import BinaryNode from '../BinaryNode.ts';

interface BinaryTree extends Tree {
  root: BinaryNode | null;
  insert(value: number): BinaryNode;
  find(value: number): BinaryNode | null;
}

export default BinaryTree;