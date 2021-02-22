import Node from '../../NodeClass.js';
import isTreeUnival from './isTreeUniVal.js';

const howManyUnivalsubtrees = (root, univalsubtrees = 0) => {
  if (root === null) return (univalsubtrees += 1);
  if (!root.left && !root.right) return (univalsubtrees += 1);

  if (
    (root.left.data === root.data && root.right.data === root.data) ||
    (root.left.data === root.data && !root.right) ||
    (root.right.data === root.data && !root.left)
  ) {
    univalsubtrees += 1;
  }

  univalsubtrees = howManyUnivalsubtrees(root.left, univalsubtrees);
  univalsubtrees = howManyUnivalsubtrees(root.right, univalsubtrees);
  
  if (root.left.left && root.right.right && isTreeUnival(root)) univalsubtrees += 1;
  
  return univalsubtrees;
};

export default howManyUnivalsubtrees;