/*
6.	Write a function to find the middle node of a linked list.
7.	Implement a function to reverse a linked list.
8.	How do you detect a cycle in a linked list?
9.	Write a function to merge two sorted linked lists.
10.	How do you find the nth node from the end of a linked list?
 */

// 6. Find the middle node of a linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  // Move 'fast' two steps and 'slow' one step at a time
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // When 'fast' reaches the end, 'slow' is at the middle
  return slow;
}

// Example usage:

// Create linked list: 1 → 2 → 3 → 4 → 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = findMiddle(head);
console.log(middle.value); // Output: 3
