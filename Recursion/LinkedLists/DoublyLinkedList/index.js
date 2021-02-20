class Node {
    static lastCreated;
    constructor(data) {
      this.data = data;
      this.prev = {};
      this.next = {};
      if (Node.lastCreated) {
        Node.lastCreated.next = this;
        this.prev = Node.lastCreated;
      }
      Node.lastCreated = this;
    }
  
    static countNodes(head) {
      let count = head.data ? 1 : 0;
      if (head.next) {
        let currentNode = head;
        do {
          currentNode = currentNode.next;
          count += 1;
        } while (currentNode.next);
      }
      console.log('The total of nodes is: ', count);
      return count;
    }
  
    goBackwards() {
      if(this.prev) {
          console.log(`The previous node data is: ${this.prev.data}`);
      }
      else console.log(`Oh, it seems that there isn't any node before the current`);    
  }
  }
  
  const head = new Node(4);
  const nodeB = new Node(8);
  const nodeC = new Node(11);
  const nodeD = new Node(17);
  
  Node.countNodes(head);
  nodeB.goBackwards();
  