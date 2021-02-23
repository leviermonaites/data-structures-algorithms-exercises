import TwoChildrenNode from '../../TwoChildrenNode.js';
import SemiUnivalTree from './FindSumSemiUnivalTree.js';
import HowManyUnivalSubtrees from './howManyUnivalSubtrees.js';

const root = new TwoChildrenNode(1);

const node2 = new TwoChildrenNode(1, root);
const node3 = new TwoChildrenNode(2, root);

const node4 = new TwoChildrenNode(3, node2);
const node5 = new TwoChildrenNode(3, node2);

const node6 = new TwoChildrenNode(4, node3);
const node7 = new TwoChildrenNode(2, node3);

const semiUnivaltreesAndUnivalSubtreesCombined = (node) => {
    return SemiUnivalTree(node) + HowManyUnivalSubtrees(node);
}

console.log(semiUnivaltreesAndUnivalSubtreesCombined(root));