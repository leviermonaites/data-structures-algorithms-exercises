import MultipleChildrenNode from '../../MultipleChildrenNode.js';

const node1 = new MultipleChildrenNode(1, null)
const node2 = new MultipleChildrenNode(1, node1);
const node3 = new MultipleChildrenNode(1, node2);

const countUnivalTrees = (node) => {
    if(!node) return 1;
    let howManyUnivaltrees = 0;
    let isUnival = true;
    if(node.children.length > 0) {
        node.children.forEach((child) => {
            child.data !== node.data ? isUnival = false : null;
        });
    } else {
        howManyUnivaltrees++;
    }
    if(isUnival) {
        howManyUnivaltrees++;
        node.children.forEach((child) => howManyUnivaltrees += countUnivalTrees(child));
        return howManyUnivaltrees;
    }
    return howManyUnivaltrees;
}

console.log(countUnivalTrees(node1));