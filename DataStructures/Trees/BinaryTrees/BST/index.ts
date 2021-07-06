import BinaryTree from "../interface/BinaryTree.ts";
import BinaryNode from "../BinaryNode.ts";

class BST implements BinaryTree {
  root: BinaryNode | null = null;

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
}

export default BST;
