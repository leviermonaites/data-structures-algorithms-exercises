import BinaryTree from "../interface/BinaryTree";
import BinaryNode from "../BinaryNode";
import Queue from '../../../Queues/SinglyLinkedListBasedQueue';
import { AcceptedDataType } from '../types/AcceptedDataType';


class BST implements BinaryTree {
  root: BinaryNode | null = null;
  private size = 0;
  
  get length() {
    return this.size;
  }

  bfs() {
    const nodes = new Array(this.length),
          queue = new Queue();

    queue.enqueue(this.root);
    
    for(let i = 0; i < nodes.length; i++) {
      const node = queue.dequeue() as BinaryNode;
      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
      nodes[i] = node.value;
    }
  
    return nodes;
  }

  dfsPre() {
    const nodes = [];

    (function iterate(node: BinaryNode | null) {
      if(node) nodes.push(node.value);
      if(node?.left) iterate(node.left);
      if(node?.right) iterate(node.right);
    })(this.root);

    return nodes;
  }

  find(value: AcceptedDataType) {
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

  insert(value: AcceptedDataType) {
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