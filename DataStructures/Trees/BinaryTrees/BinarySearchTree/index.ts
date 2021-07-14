import BinaryTree from "../interface/BinaryTree.ts";
import BinaryNode from "../BinaryNode.ts";
import Queue from '../../../Queues/SinglyLinkedListBasedQueue.ts';


class BST implements BinaryTree {
  root: BinaryNode | null = null;
  private size = 0;
  
  get length() {
    return this.size;
  }

  bfs() {
    const nodes = new Array(this.length);
    
    const queue = new Queue();
    queue.enqueue(this.root);
    
    for(let i = 0; i < nodes.length; i++) {
      const node = queue.dequeue() as BinaryNode;
      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
      nodes[i] = node.value;
    }
  
    return nodes;
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



}

export default BST;
