import Node from './Node.ts';

interface LinkedList {
  head: Node | null;
  tail?: Node | null;

  add(node: Node): void;
  remove(node: Node): string;
  clear(): string;
}

export default LinkedList;