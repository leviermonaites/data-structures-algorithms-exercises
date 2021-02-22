export default class Node {
    static _root;
    static _howManyCreated = 0;
  constructor(data, childOf) {
    Node._howManyCreated += 1;
    this.data = data;
    this.name = `Node${Node._howManyCreated}`;
    this.left;
    this.right;

    if (childOf) {
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