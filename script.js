"use strict";

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add to the end of the list
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.size++;
      return;
    }

    let current = this.head;
    while (current) {
      if (!current.next) {
        current.next = new Node(value);
        this.size++;
        return;
      }
      current = current.next;
    }
  }

  // add to the start of the list
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // return the total number of nodes in the list
  printSize() {
    console.log(this.size);
  }

  // return first node in the list
  printHead() {
    console.log(this.head);
  }

  // return the last node in the list
  printTail() {
    let current = this.head;

    while (current) {
      if (!current.next) {
        console.log(current);
        return;
      }
      current = current.next;
    }
  }

  // return node at given index in the list
  at(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current);
        return;
      }
      current = current.next;
      count++;
    }
    return;
  }

  // remove last element of the list
  pop() {
    let previous = this.head;
    let current = previous.next;
    while (previous) {
      console.log(current);
      if (!current.next) {
        current = null;
        previous.next = null;
        this.size--;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  // return if given value is in the list
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        console.log(true);
        return;
      } else if (!current.next && current.value !== value) {
        console.log(false);
        return;
      }
      current = current.next;
    }
  }

  // return index of the node containg value
  find(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === value) {
        console.log(count);
        return;
      } else if (!current.next && current.value !== value) {
        console.log(null);
        return;
      }
      current = current.next;
      count++;
    }
  }

  // return objects as string
  toString() {
    let current = this.head;
    let string = ``;
    while (current) {
      string += `${current.value} -> `;
      current = current.next;
    }
    string += "null";
    console.log(string);
  }

  // insert node at given index
  insertAt(value, index) {
    let previous = this.head;
    let current = previous.next;
    let count = 0;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index > this.size - 1) {
      this.append(value);
      return;
    }

    while (previous) {
      if (count === index - 1) {
        previous.next = new Node(value, current);
        this.size++;
        return;
      }
      previous = current;
      current = current.next;
      count++;
    }
  }

  // remove node at given index
  removeAt(index) {
    let previous = this.head;
    let current = previous.next;
    let count = 0;

    while (current) {
      if (count === index - 1) {
        previous.next = current.next;
        current = null;
        this.size--;
        return;
      }
      count++;
      previous = previous.next;
      current = current.next;
    }
  }

  // print values of the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// const n1 = new Node("cat");
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("mouse");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.print();
// console.log("----");
// list.printSize();
// list.printHead();
// list.printTail();
// list.at(0);
// list.contains("mouse");
// list.find("snake");
// list.toString();

// list.insertAt("test1", 4);
// list.pop();

// list.print();

// console.log(list);
