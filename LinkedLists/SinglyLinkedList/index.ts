import Node from './Node.ts';

class SinglyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;

  add(node: Node) {
    if(this.tail) this.tail.next = node;
    this.tail = node;
    if(!this.head) this.head = node;
  }

  remove(node: Node) {
    if(!this.head) return "Element not found";
    if(this.head === node) {
      this.head = this.head.next;
      return;
    }
    
    let trav = this.head;
    let trav2 = trav.next;

    if(trav2) {
    do {
      if(trav2 === node) {
        trav.next = trav2.next;
        return "Removed successfully!";
      }

      if(trav2.next) {
        trav = trav2;
        trav2 = trav2.next;
      } else break;
    } while(true);
  }
    
    return "Element not found!";
  }

  clear() {
    let node = this.head;
    while(node) {
      // Node.next may be null
      let removable = node.next; // The name removable was chosen because of this particular line and not the below one.
      
      if(removable) removable = removable.next; // Removable will be another node or a null after this line.

      node.next = null;

      node = removable; // It may be null from now, if it is, the wile statement ends up, and we just clean the head and the tail below.
    }
    this.head = null;
    this.tail = null;
    return "Linked List entirely cleaned";
  }
}

const linkedList = new SinglyLinkedList();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

linkedList.add(a);
linkedList.add(b);
linkedList.add(c);
linkedList.add(d);
linkedList.add(e);
linkedList.add(f);

// console.log(linkedList.remove(d)); // Expected output: "Removed successfully!";
console.log(linkedList.clear());
console.log(linkedList);

export default SinglyLinkedList;