const Node = require('../NodeClass');

const node1 = new Node(1, null);

const node2 = new Node(2, node1);
const node3 = new Node(3, node1);

const node4 = new Node(4, node2);
const node5 = new Node(5, node2);

const node6 = new Node(6, node3);
const node7 = new Node(7, node3);

const howManyUniValSubTrees = (root, univalsubtrees = 0) => {
  if (root === null) return (univalsubtrees += 1);
  if (!root.left && !root.right) return (univalsubtrees += 1);
  if (root.left.data === root.data && root.right.data === root.data) univalsubtrees += 1;
  univalsubtrees = howManyUniValSubTrees(root.left, univalsubtrees);
  univalsubtrees = howManyUniValSubTrees(root.right, univalsubtrees);
  return univalsubtrees;
};

console.log(howManyUniValSubTrees(node1));
