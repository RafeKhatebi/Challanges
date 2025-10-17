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

//12. How do you check if two linked lists intersect?
// Algorithm:
// 1. Get the lengths of both linked lists.
// 2. Calculate the difference in lengths.
// 3. Move the pointer of the longer list ahead by the difference in lengths.
// 4. Traverse both lists simultaneously until the pointers meet or reach the end.
function getLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

function doIntersect(headA, headB) {
  const lenA = getLength(headA);
  const lenB = getLength(headB);
  let currentA = headA;
  let currentB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      currentA = currentA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      currentB = currentB.next;
    }
  }
  while (currentA && currentB) {
    if (currentA === currentB) return true; // Intersection found
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return false; // No intersection found
}

//13. Write a function to find the starting point of a cycle in a linked list.
// Algorithm:
// 1. Use Floyd's cycle-finding algorithm (tortoise and hare).
// 2. Initialize two pointers, slow and fast, both pointing to the head.
// 3. Move slow one step at a time, and fast two steps at a time.
// 4. If there is a cycle, they will eventually meet.
// 5. Reset slow to the head, and move both pointers one step at a time until they meet again.
// 6. The meeting point is the start of the cycle.
function findCycleStart(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow; // Start of the cycle
    }
  }
  return null; // No cycle found
}

//14.
