import Node from './Node';

interface Tree {
  root: Node | null;
  length: number;
  insert(value: unknown): Node;
  find(value: unknown): Node | null;
}

export default Tree;