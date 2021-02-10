const Node = require('../NodeClass');

const node1 = new Node(1, null);

const node2 = new Node(0, node1);
const node3 = new Node(1, node1);

const node4 = new Node(1, node2);
const node5 = new Node(0, node2);

const node6 = new Node(0, node3);
const node7 = new Node(1, node3);

const howManyUniValTrees = (root, univaltrees = 0) => {
    if(root === null) return univaltrees += 1;
    if(!root.left && !root.right) return univaltrees += 1;
    if(root.left && root.right && root.data === root.left.data && root.data === root.right.data) univaltrees += 1;
    univaltrees = howManyUniValTrees(root.left, univaltrees);
    univaltrees = howManyUniValTrees(root.right, univaltrees);
    return univaltrees;
}

console.log(howManyUniValTrees(node1));