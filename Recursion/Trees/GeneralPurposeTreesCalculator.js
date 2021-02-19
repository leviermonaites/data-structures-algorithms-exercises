import MultipleChildrenNode from '../../MultipleChildrenNode.js';

const node1 = new MultipleChildrenNode(1, null)
const node2 = new MultipleChildrenNode(2, node1);

console.log(node1);