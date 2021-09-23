import Node from './Node';

interface Tree<T> {
  root: Node<T> | null;
  length: number;
  insert(value: T): Node<T>;
  find(value: T): Node<T> | null;
}

export default Tree;