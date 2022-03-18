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

//////////////////////////////////////////////////

// Stack Linked List
class Stack {
  constructor(){
    this.size = 0;
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
    this.size += 1;
  }

  pop() {
    let current = this.head;
    if (this.size === 0){
      return 'Empty'
    } else if (this.size === 1) {
      this.head = null;
      this.size = 0;
      return current.element;
    } else {
      let count = 0;
      while (count < this.size - 2) {
        current = current.next;
        count += 1;
      }
      const value = current.next.element;
      current.next = null;
      this.size -= 1;
      return value
    }
  }
}

//////////////////////////////////////////////////

// Queue Linked List
class Queue {
  constructor() {
    this.size = 0;
    this.tail = null;
  }

  add(element) {
    const node = {element, next: null};
    if (this.tail === null) {
      this.tail = node;
      this.size += 1;
    } else {
      let last = this.tail
      this.tail = node
      this.tail.next = last
      this.size += 1;
    }
  }

  pop() {
    let current = this.tail;
    let count = 0
    if (this.size === 0) {
      return 'Empty'
    } else if (this.size === 1) {
      this.tail = null;
      this.size -= 1;
      return current.element
    } else {
      while (count < this.size - 2) {
        current = current.next;
        count += 1;
      }
      const toReturn = current.next.element;
      current.next = null;
      this.size -= 1;
      return toReturn
    }
  }
}
