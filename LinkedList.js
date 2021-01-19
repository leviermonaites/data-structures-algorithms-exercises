class Node {
    static thereIsOne = false;
  static lastCreated;
  constructor(data) {
    this.data = data;
    this.next = void{};
    if(Node.thereIsOne) {
        Node.lastCreated.next = this;
    }
    Node.lastCreated = this;
    Node.thereIsOne = true;    
  }

  static countNodes(head) {
    if (head.next) {
      let currentNode = head;
      do {
        console.log('The current Node data is: ', currentNode.data);
        console.log('The next Node data is: ', currentNode.next.data);
        currentNode = currentNode.next;
      } while (currentNode.next);
    }
  }
}

const head = new Node(4);
const nodeB = new Node(8);
const nodeC = new Node(11);
const nodeD = new Node(17);

// head.next = nodeB;
// nodeB.next = nodeC;
// nodeC.next = nodeD;

Node.countNodes(head);
