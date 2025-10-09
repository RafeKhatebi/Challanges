/*
11.	Implement a function to remove duplicates from a linked list.
12.	How do you check if two linked lists intersect?
13.	Write a function to find the starting point of a cycle in a linked list.
14.	Implement a function to group even and odd nodes together in a linked list.
15.	Write a function to add two numbers represented as linked lists.*/
//11. Implement a function to remove duplicates from a linked list.
function removeDuplicates(head) {
  let current = head;
  let prev = null;
  const seen = new Set();

  while (current !== null) {
    if (seen.has(current.value)) {
      // Duplicate found, remove it
      prev.next = current.next;
    } else {
      seen.add(current.value);
      prev = current;
    }
    current = current.next;
  }
  return head;
}
