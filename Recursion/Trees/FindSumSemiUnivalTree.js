import TwoChildrenNode from '../../TwoChildrenNode.js';

const node1 = new TwoChildrenNode(1, null);
const node2 = new TwoChildrenNode(1, node1);
const node3 = new TwoChildrenNode(2, node1);


const countSemiUnivaltree = (node) => {
    if(!node) return 0;
    if(!node.left || !node.right) return 0;
    if(node.data === node.left.data && node.data === node.right.data) return 0;
    if(node.data !== node.left.data && node.data !== node.right.data) return 0;
    let howManySemiUnivaltrees = 1;
    howManySemiUnivaltrees += countSemiUnivaltree(node.left) + countSemiUnivaltree(node.right); 
    return howManySemiUnivaltrees;
}

export default countSemiUnivaltree;