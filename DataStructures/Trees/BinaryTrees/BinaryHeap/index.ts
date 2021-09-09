export class MaxBinaryHeap {
  nodes: unknown[] = [];

  add(node: unknown) {
    this.nodes.push(node);
    return this.nodes;
  }
  
  getChildren(index: number) {
    const children = [];

    if(this.nodes[index * 2 + 1]) children.push(this.nodes[index * 2 + 1]);
    if(this.nodes[index * 2 + 2]) children.push(this.nodes[index * 2 + 2]);

    return children;
  }

  getParent(index: number) {
    const parent = index % 2 === 0
      ? this.nodes[Math.floor(index / 2 - 1)]
      : this.nodes[Math.floor(index / 2)]
    
    return parent;
  }
}