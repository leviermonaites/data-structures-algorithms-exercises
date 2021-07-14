import LinkedList from "../interface/LinkedList.ts";
import SinglyNode from "./SinglyNode.ts";

class SinglyLinkedList implements LinkedList {
  head: SinglyNode | null | undefined;
  tail: SinglyNode | null | undefined;
  private size = 0;

  get length() { return this.size }

  private addWhenEmpty(data: unknown) {
    const node = new SinglyNode(data);
    this.head = node;
    this.tail = node;
    this.head.next = this.tail;
    this.size++;
    return node;
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
    this.size = 0;
    return true;
  }

  contains(data: unknown) {
    if(this.search(data)) return true;
    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if(this.size < 1) return undefined;

    let trav = this.head;
    while(trav) {
      if(!trav.next && trav === this.tail) {
        const tempTail = this.tail;
        trav.next = null;
        this.tail = trav;
        return tempTail.data;
      } else trav = trav.next;
    }
  }

  push(data: unknown) {
    if(this.size < 1) return this.addWhenEmpty(data);
    
    const node = new SinglyNode(data);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.size++;
    return node;
  }

  remove(data: unknown) {
    if (this.head && this.head.data === data) {
      const tempHead = this.head;
      this.head = this.head.next;
      return tempHead;
    }

    let trav = this.head;
    let trav2 = trav ? trav.next : null;

    if (trav2) {
      do {
        if (trav2.data === data) {
          const tempTrav2 = trav2;
          if (trav) trav.next = trav2.next;
          this.size--;
          return tempTrav2;
        }

        if (trav2.next) {
          trav = trav2;
          trav2 = trav2.next;
        } else break;
      } while (true);
    }
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

  search(data: unknown) {
    let trav = this.head;
    while(trav) {
      if(trav.data === data) return trav;
      else trav = trav.next
    }

    return undefined;
  }

  shift() {
    if (this.head) {
      const tempHead = this.head;
      this.head = this.head.next;
      return tempHead.data;
    }
  }

  toArray() {
    const arr = new Array(this.size);
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

  unshift(data: unknown) {
    if(this.size < 1) return this.addWhenEmpty(data);

    const node = new SinglyNode(data);
    node.next = this.head;
    this.head = node;
    return node;
  }
}

export default SinglyLinkedList;
