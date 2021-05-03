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
    if (this.tail) this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  private addFirst(node: DoublyNode) {
    if (this.head) this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  remove(node: DoublyNode) {
    if (!this.isEmpty()) {
      if(node === this.head) return this.removeFirst();
      if(node === this.tail) return this.removeLast();
      let trav = this.head ? this.head.next : null;

      while (trav) {
        if (node === trav) {
          if (trav.prev) trav.prev.next = trav.next;
          if (trav.next) trav.next.prev = trav.prev;
          this.size--;
          return "Element removed successfully";
        }

        trav = trav.next;
      }

    }
    return "Element not found!";
  }

  removeFirst() {
    if (!this.isEmpty()) {
      if (this.head && this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null; // If head hasn't any prev, it means that it was the only Node assigned to the Linked List.
        this.tail = null;
      }
      this.size--;
      return "Element removed successfully!";
    }
    return "Element not found!";
  }

  removeLast() {
    if (!this.isEmpty()) {
      if (this.tail && this.tail.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.head = null; // If tail hasn't any prev, it means that it was the only Node assigned to the Linked List.
        this.tail = null;
      }
      this.size--;
      return "Element removed successfully!";
    }
    return "Element not found!";
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
const i = new DoublyNode("i");

dbLinList.add(a);
dbLinList.add(b);
dbLinList.add(c);
dbLinList.add(d);
dbLinList.add(e);
dbLinList.add(f);
dbLinList.add(g);
dbLinList.add(h);

console.log(dbLinList.remove(i));

// dbLinList.clear();
console.log(dbLinList);

export default DoublyLinkedList;
