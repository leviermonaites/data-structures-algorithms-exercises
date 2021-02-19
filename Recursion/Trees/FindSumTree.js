const Node = require('../../TwoChildrenNode');

const node1 = new Node(1, null);
const node2 = new Node(5, node1);
const node3 = new Node(7, node1);

const node4 = new Node(11, node2);
const node5 = new Node(15, node2);

const findSum = (root) => {
    if(root === undefined) return 0;
    return root.data + findSum(root.left) + findSum(root.right);
};
