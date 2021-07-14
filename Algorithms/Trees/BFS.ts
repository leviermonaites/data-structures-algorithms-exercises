import BinarySearchTree from '../../DataStructures/Trees/BinaryTrees/BinarySearchTree/index.ts';
import Queue from '../../DataStructures/Queues/SinglyLinkedListBasedQueue.ts';
import BinaryNode from '../../DataStructures/Trees/BinaryTrees/BinaryNode.ts';

const binarySearchTree = new BinarySearchTree();

for(let i = 1; i < 50; i++) {
  binarySearchTree.insert(Math.ceil(Math.random() * 10 * i));
}

const bfs = (bst: BinarySearchTree) => {
  const nodes = new Array(bst.length);
  
  const queue = new Queue();
  queue.enqueue(bst.root);
  
  for(let i = 0; i < nodes.length; i++) {
    const node = queue.dequeue() as BinaryNode;
    if(node.left) queue.enqueue(node.left);
    if(node.right) queue.enqueue(node.right);
    nodes[i] = node.value;
  }

  return nodes;
}

console.log(bfs(binarySearchTree));