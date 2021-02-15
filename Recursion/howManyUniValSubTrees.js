import Node from '../NodeClass.js';
import isTreeUnival from './IsTreeUniVal.js';

const node1 = new Node(1, null);

const node2 = new Node(1, node1);
const node3 = new Node(1, node1);

const node4 = new Node(1, node2);
const node5 = new Node(1, node2);

const node6 = new Node(1, node3);
const node7 = new Node(1, node3);

const howManyUniValSubTrees = (root, univalsubtrees = 0) => {
  console.log(root);
  if (root === null) return (univalsubtrees += 1);
  if (!root.left && !root.right) return (univalsubtrees += 1);

  if (
    (root.left.data === root.data && root.right.data === root.data) ||
    (root.left.data === root.data && !root.right) ||
    (root.right.data === root.data && !root.left)
  ) {
    univalsubtrees += 1;
  }

  univalsubtrees = howManyUniValSubTrees(root.left, univalsubtrees);
  univalsubtrees = howManyUniValSubTrees(root.right, univalsubtrees);
  
  if (root.left.left && root.right.right && isTreeUnival(root)) univalsubtrees += 1;
  
  return univalsubtrees;
};

console.log(howManyUniValSubTrees(node1));
