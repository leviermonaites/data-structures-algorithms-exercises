import LinkedList from "../interface/LinkedList.ts";
import DoublyNode from "./DoublyNode.ts";

class DoublyLinkedList implements LinkedList {
  head: DoublyNode | null = null;
  tail: DoublyNode | null = null;
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

  private addWhenEmpty(node: DoublyNode) {
    this.head = node;
    this.tail = node;
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.incrementLength();
    return node;
  }

  search(node: DoublyNode) {
    let trav = this.head;
    while (trav) {
      if (trav === node) return node;
      else trav = trav.next;
    }
    return undefined;
  }

  push(data: unknown) {
    const node = new DoublyNode(data);
    if (this.isEmpty()) return this.addWhenEmpty(node);
    if (this.tail) this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.incrementLength();
    return node;
  }

  unshift(data: unknown) {
    const node = new DoublyNode(data);
    if (this.isEmpty()) return this.addWhenEmpty(node);
    if (this.head) this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.incrementLength();
    return node;
  }

  private removeWhenOneElementRemains() {
    this.head = null;
    this.tail = null;
    this.decrementLength();
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    if (this.getSize() - 1 === 0) return this.clear();
    if (this.getSize() - 1 === 1) return this.removeWhenOneElementRemains();

    if (this.tail) this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.decrementLength();

    return true;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    if (this.getSize() - 1 === 0) return this.clear();
    if (this.getSize() - 1 === 1) return this.removeWhenOneElementRemains();

    if (this.head) this.head = this.head.next;
    if (this.head) this.head.prev = null;

    this.decrementLength();
    return true;
  }

  remove(node: DoublyNode) {
    if (!this.isEmpty()) {
      if (this.head === node) return this.shift();
      if (this.tail === node) return this.pop();

      const trav = this.search(node);
      if(trav) {
        if(trav.prev) trav.prev.next = trav.next;
        if(trav.next) trav.next.prev = trav.prev;
        return true;
      }
    }
    return undefined;
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
    this.length = 0;
    return true;
  }

  toArray() {
    const arr = new Array(this.length);
    let node = this.head;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = node ? node.data : null;
      node = node ? node.next : null;
    }
    return arr;
  }

  toString() {
    let sb = "[";
    for (let node = this.head; node; node = node.next) {
      if (node.next) sb = sb.concat(`${node.data},`);
      else sb = sb.concat(`${node.data}`);
    }
    sb = sb.concat("]");
    return sb;
  }

  reverse() {
    let trav = this.head;
    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;

    while(trav) {
      const tempTravNext = trav.next;
      trav.next = trav.prev;
      trav.prev =  tempTravNext;
      trav = trav.next;
    }
    return true;
  }
}

const dbLinList = new DoublyLinkedList();
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
const f = "f";
const g = "g";
const h = "h";

dbLinList.push(a);
dbLinList.push(b);
dbLinList.push(c);
dbLinList.push(d);
dbLinList.push(e);
dbLinList.push(f);
dbLinList.push(g);
dbLinList.push(h);

dbLinList.reverse();
console.log(dbLinList);

export default DoublyLinkedList;
