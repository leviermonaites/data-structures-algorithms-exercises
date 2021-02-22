import MultipleChildrenNode from '../../MultipleChildrenNode.js';

const countUnivaltrees = (node) => {
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
        node.children.forEach((child) => howManyUnivaltrees += countUnivaltrees(child));
        return howManyUnivaltrees;
    }
    return howManyUnivaltrees;
}

export default countUnivaltrees;