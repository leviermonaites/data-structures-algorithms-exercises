const findSum = (root) => {
  if (root === undefined) return 0;
  return root.data + findSum(root.left) + findSum(root.right);
};

export default findSum;
