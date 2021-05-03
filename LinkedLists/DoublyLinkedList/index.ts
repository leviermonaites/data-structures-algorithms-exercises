import LinkedList from "../interface/LinkedList.ts";
import DoublyNode from "./DoublyNode.ts";

class DoublyLinkedList implements LinkedList {
  head: DoublyNode | null = null;
  tail: DoublyNode | null = null;
  private size: number = 0;

  add(node: DoublyNode, where: string = "tail") {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (where === "tail") this.addLast(node);
      else this.addFirst(node);
    }
    this.size++;
  }

  private addLast(node: DoublyNode) {
    if(this.tail) this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  private addFirst(node: DoublyNode) {
    if(this.head) this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  remove(node: DoublyNode) {
    let elementRemoved = false;
    if (node === this.tail) {
      if (this.tail.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.head = null; // If tail hadn't any prev, it means that it was the only Node assigned to the Linked List.
        this.tail = null;
      }
      elementRemoved = true;
    }
    
    if (!elementRemoved && node === this.head) {
      this.head = this.head.next;
      if(this.head) this.head.prev = null;
      elementRemoved = true;
    } 

    if(!elementRemoved) {
      let trav = this.head ? this.head.next : null;
      
      while (trav) {
        if (node === trav) {
          if (trav.prev) trav.prev.next = trav.next;
          if (trav.next) trav.next.prev = trav.prev;
          elementRemoved = true;
          break;
        }

        trav = trav.next;
      }
    }

    if(elementRemoved) {
      this.size--;
      return "Element removed successfully"
    } else return "Element not found!";
  }

  clear() {
    let node = this.head;
    if (node) {
      while (node) {
        if (node.prev) {
          node.prev.next = null;
          node.prev = null;
        }
        node = node.next;
      }
      this.head = this.tail = node;
    }
    this.size = 0;
    return "Linked list entirely cleaned";
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const dbLinList = new DoublyLinkedList();
const a = new DoublyNode("a");
const b = new DoublyNode("b");
const c = new DoublyNode("c");
const d = new DoublyNode("d");
const e = new DoublyNode("e");
const f = new DoublyNode("f");
const g = new DoublyNode("g");
const h = new DoublyNode("h");

dbLinList.add(a);
dbLinList.add(b);
dbLinList.add(c);
dbLinList.add(d);
dbLinList.add(e);
dbLinList.add(f);
dbLinList.add(g);
dbLinList.add(h);

dbLinList.remove(a);

// dbLinList.clear();
console.log(dbLinList);

export default DoublyLinkedList;
