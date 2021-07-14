import BinaryTree from "../interface/BinaryTree.ts";
import BinaryNode from "../BinaryNode.ts";

class BST implements BinaryTree {
  root: BinaryNode | null = null;
  private size = 0;

  insert(value: number) {
    const node = new BinaryNode(value);
    if (!this.root) this.root = node;
    else {
      let trav = this.root;
      while (trav) {
        if (node.value > trav.value) {
          if (trav.right) trav = trav.right;
          else {
            trav.right = node;
            break;
          }
        } else {
          if (trav.left) trav = trav.left;
          else {
            trav.left = node;
            break;
          }
        }
      }
    }

    this.size++;

    return this.root;
  }

  find(value: number) {
    if(this.root && this.root.value === value) return this.root;
    else {
      let trav = this.root;

      while(trav) {
        if(value > trav.value) trav = trav.right;
        else if(value < trav.value) trav = trav.left;
        else break;
      }
      
      return trav;
    }
  }

  get length() {
    return this.size;
  }
}

export default BST;
