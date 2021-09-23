export class MinBinaryHeap {
  nodes: number[] = [];

  add(node: number) {
    const i = this.getAddingIndex(node);
    this.nodes = [...this.nodes.slice(0, i), node, ...this.nodes.slice(i)];

    return this.nodes;
  }

  private getAddingIndex(node: number, index: number = this.getParentIndex(this.nodes.length), parentOfIndex: number = this.nodes.length): number {
    if(index === 0 && (this.nodes[0] > node || !this.nodes[0])) return 0;
    if(node < this.nodes[index]) return this.getAddingIndex(node, this.getParentIndex(index), index)
    return parentOfIndex;
  }
  
  getChildren(index: number) {
    const children = [];

    if(this.nodes[index * 2 + 1]) children.push(this.nodes[index * 2 + 1]);
    if(this.nodes[index * 2 + 2]) children.push(this.nodes[index * 2 + 2]);

    return children;
  }
  
  getChildrenIndexes(index: number) {
    const children = [];

    if(this.nodes[index * 2 + 1]) children.push(index * 2 + 1);
    if(this.nodes[index * 2 + 2]) children.push(index * 2 + 2);

    return children;
  }

  getParent(index: number) {
    const parent = index % 2 === 0
      ? this.nodes[Math.floor(index / 2 - 1)]
      : this.nodes[Math.floor(index / 2)]
    
    return parent;
  }
  
  getParentIndex(index: number) {
    const parent = index % 2 === 0
      ? Math.floor(index / 2 - 1)
      : Math.floor(index / 2)
    
    return parent;
  }
}
