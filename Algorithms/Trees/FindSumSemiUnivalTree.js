const countSemiUnivaltree = (node) => {
    if(!node) return 0;
    if(!node.left || !node.right) return 0;
    if(node.data === node.left.data && node.data === node.right.data) return 0;
    if(node.data !== node.left.data && node.data !== node.right.data && node.left.data !== node.right.data) return 0;
    let howManySemiUnivaltrees = 1;
    howManySemiUnivaltrees += countSemiUnivaltree(node.left) + countSemiUnivaltree(node.right); 
    return howManySemiUnivaltrees;
}

export default countSemiUnivaltree;