class Node {
    static _root;
  constructor(data, childOf) {
    this.data = data;
    this.left;
    this.right;

    if (childOf !== null) {
      if (childOf.left) {
        if (childOf.right) throw new Error('Node already full');
        else childOf.right = this;
      } else {
        childOf.left = this;
      }
    } else {
        Node._root = this;
    }
  }
}

const node1 = new Node(1, null);
const node2 = new Node(5, node1);
const node3 = new Node(7, node1);

const node4 = new Node(11, node2);
const node5 = new Node(15, node2);

const findSum = (root) => {
    if(root === undefined) return 0;
    return root.data + findSum(root.left) + findSum(root.right);
};

console.log(findSum(Node._root));
