// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    const node = {element, next: null};

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next;
      }

        current.next = node;
    }
  }
  
  getNode(index) {
    let current = this.head;
    if (index === 0) {
      return current
    } else {
      let count = 0;
      while (count < index) {
        current = current.next
        count += 1;
      }
      return current
    }
  }

  get(index) {
    return this.getNode(index).element
  }

  addAt(index, element) {
    const prevNode = this.getNode(index-1);
    const next = this.getNode(index);
    const node = {element, next};

    if (index <= 0) {
      this.head = {element, next};
    } else {

      prevNode.next = node;
    }
  }

  remove(index) {
    const prevNode = this.getNode(index-1);
    const next = this.getNode(index+1);

    if (index <= 0) {
      this.head = next;
    } else {
      prevNode.next = next;
    }
  }
}
