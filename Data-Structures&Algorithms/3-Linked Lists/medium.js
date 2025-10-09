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

// 7. Reverse a linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Save next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = next; // Move current forward
  }

  return prev; // New head of reversed list
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const reversed = reverseLinkedList(head);

// Print reversed list: 4 → 3 → 2 → 1
let node = reversed;
let result = "";
while (node) {
  result += node.value + (node.next ? " → " : "");
  node = node.next;
}
console.log(result);

//8. Detect a cycle in a linked list
//Algorithm: Floyd’s Cycle-Finding Algorithm (Tortoise and Hare Algorithm) خرگوش ولاک پشت 
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
