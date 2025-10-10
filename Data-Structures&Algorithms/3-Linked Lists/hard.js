/*
11.	Implement a function to remove duplicates from a linked list.
12.	How do you check if two linked lists intersect?
13.	Write a function to find the starting point of a cycle in a linked list.
14.	Implement a function to group even and odd nodes together in a linked list.
15.	Write a function to add two numbers represented as linked lists.*/

//11. Implement a function to remove duplicates from a linked list.
// Algorithm:
// 1. Create a set to keep track of seen values.
// 2. Traverse the linked list, and for each node:
//    a. If the value is in the set, remove the node by adjusting the pointers.
//    b. If the value is not in the set, add it to the set and move to the next node.
function removeDuplicates(head) {
  if (!head) return null;
  const seen = new Set();
  let current = head;
  let prev = null;
  while (current) {
    if (seen.has(current.value)) {
      prev.next = current.next; // Remove duplicate
    } else {
      seen.add(current.value);
      prev = current; // Move prev to current
    }
    current = current.next;
  }
  return head;
}
