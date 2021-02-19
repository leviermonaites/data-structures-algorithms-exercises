class Node {
  constructor(data, childOf) {
    this.data = data;
    this.children = [];

    if (childOf !== null && childOf instanceof Node) {
      childOf.addOneChild(this);
    }
  }

  addOneChild(node) {
    return this.children.push(node);
  }
}

export default Node;
