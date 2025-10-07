/*
1.	What is a linked list, and how does it differ from an array?
2.	Implement a function to insert a node at the beginning of a linked list.
3.	How do you delete a node from a linked list?
4.	Write a function to traverse and print a linked list.
5.	Implement a function to find the length of a linked list.
*/

// 1. What is a linked list, and how does it differ from an array?
// A linked list is a linear data structure where each element (node) contains a value and a reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, allowing for dynamic memory allocation and efficient insertions and deletions. However, linked lists have slower access times for individual elements compared to arrays, which allow direct indexing.

// 2. Implement a function to insert a node at the beginning of a linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
}
// 3. How do you delete a node from a linked list?
LinkedList.prototype.deleteNode = function (value) {
  if (!this.head) return;
  if (this.head.value === value) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.next) {
    if (current.next.value === value) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};

// 4. Write a function to traverse and print a linked list.
LinkedList.prototype.traverse = function () {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

// 5. Implement a function to find the length of a linked list.
LinkedList.prototype.length = function () {
  let count = 0;
  let current = this.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
};
