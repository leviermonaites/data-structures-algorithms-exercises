import LinkedList from "../interface/LinkedList.ts";
import SinglyNode from "./SinglyNode.ts";

class SinglyLinkedList implements LinkedList {
  head: SinglyNode | null = null;
  tail: SinglyNode | null = null;
  private length = 0;

  getSize() {
    return this.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  private incrementLength() {
    this.length++;
  };

  private decrementLength() {
    this.length--;
  }

  search(node: SinglyNode) {
    let trav = this.head;
    while(trav) {
      if(trav === node) return trav;
      else trav = trav.next
    }

    return undefined;
  }

  addWhenEmpty(data: unknown) {
    const node = new SinglyNode(data);
    this.head = node;
    this.tail = node;
    this.head.next = this.tail;
    this.incrementLength();
    return node;
  }

  push(data: unknown) {
    if(this.getSize() < 1) return this.addWhenEmpty(data);
    
    const node = new SinglyNode(data);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.incrementLength();
    return node;
  }

  unshift(data: unknown) {
    if(this.length < 1) return this.addWhenEmpty(data);

    const node = new SinglyNode(data);
    node.next = this.head;
    this.head = node;
    return node;
  }

  pop() {
    if(!this.tail) return true;

    let trav = this.head;
    while(trav) {
      if(!trav.next && trav === this.tail) {
        trav.next = null;
        this.tail = trav;
        return true;
      } else trav = trav.next;
    }
    return undefined;
  }

  shift() {
    if (this.head) {
      this.head = this.head.next;
      return true;
    } else return undefined;
  }

  remove(node: SinglyNode) {
    if (this.head === node) {
      this.head = this.head.next;
      return true;
    }

    let trav = this.head;
    let trav2 = trav ? trav.next : null;

    if (trav2) {
      do {
        if (trav2 === node) {
          if (trav) trav.next = trav2.next;
          this.decrementLength();
          return true;
        }

        if (trav2.next) {
          trav = trav2;
          trav2 = trav2.next;
        } else break;
      } while (true);
    }

    return undefined;
  }

  clear() {
    let node = this.head;
    while (node) {
      let removable = node.next;
      if (removable) removable = removable.next;
      node.next = null;
      node = removable; 
    }
    this.head = null;
    this.length = 0;
    return true;
  }

  reverse() {
    const tempHead = this.head;

    let trav = this.head;
    let trav2 = this.head ? this.head.next : null;

    while (trav2) {
      const tempNextTrav2 = trav2.next;
      trav2.next = trav;
      trav = trav2;
      if (tempNextTrav2) trav2 = tempNextTrav2;
      else {
        this.head = trav2;
        break;
      }
    }

    this.tail = tempHead;
    if (this.tail) this.tail.next = null;
    return true;
  }
}

const linkedList = new SinglyLinkedList();
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
const f = "f";

linkedList.push(a);
linkedList.push(b);
linkedList.push(c);
linkedList.push(d);
linkedList.push(e);
linkedList.push(f);

linkedList.reverse();

// console.log(linkedList.remove(d));
// console.log(linkedList.clear());
console.log(linkedList);

export default SinglyLinkedList;
