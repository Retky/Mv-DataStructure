// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    const node = {element, next: null};  //Basic node

    if (this.head === null) {
      this.head = node;  //Add the first node
    } else {
      let current = this.head  //Select the first Parent node
      while (current.next !== null) {
        current = current.next;  //Select the last Parent node
      }
        current.next = node;  //Add node to the last Parent node
    }
  }
  
  getNode(index) {
    let current = this.head;  //Select first Parent node
    if (index === 0) {
      return current //Return first Node with childs
    } else {
      let count = 0;  //Help counter
      while (count < index) {
        current = current.next  //Select the 'index' Parent node
        count += 1;
      }
      return current  //Return 'index' Node with childs
    }
  }

  get(index) {
    return this.getNode(index).element  //Return 'index' Node value
  }

  addAt(index, element) {
    const prevNode = this.getNode(index-1);  //Select the previous node
    const next = this.getNode(index);  //Copy the 'next after add' node
    const node = {element, next};  //Create node to add with next as child

    if (index <= 0) {
      this.head = {element, next};  //Add node as first
    } else {
      prevNode.next = node;  //Add node with prevNode as Parent
    }
  }

  remove(index) {
    const prevNode = this.getNode(index-1);  //Select the previous node
    const next = this.getNode(index+1);  //Select the next node

    if (index <= 0) {
      this.head = next;  //Add next as first
    } else {
      prevNode.next = next;  //Add next as child of prevNode
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
