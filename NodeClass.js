module.exports = class Node {
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