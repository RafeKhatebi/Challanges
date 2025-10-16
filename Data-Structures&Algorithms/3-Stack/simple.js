/* 
4. Stacks
Simple
1.	What is a stack, and how does it follow the LIFO principle?
2.	Implement a stack using an array in JavaScript.
3.	How do you implement a stack using a linked list?
4.	Explain the purpose of push() and pop() in a stack.
5.	Write a function to check if a given string has balanced parentheses.
 */

//1. A stack is a linear data structure that follows the Last In First Out (LIFO) principle, meaning the last element added to the stack is the first one to be removed.

//2. Implementing a stack using an array in JavaScript :
//  Algorithm:
// 1. Create a class called ArrayStack.
// 2. Initialize an empty array to hold the stack elements.
// 3. Implement push() method to add an element to the top of the stack.
// 4. Implement pop() method to remove and return the top element of the stack.
// 5. Implement peek() method to return the top element without removing it.
// 6. Implement isEmpty() method to check if the stack is empty.
//

// Stack implementation using an array
class Stack {
  constructor() {
    this.items = []; // Internal array to store stack elements
  }

  // Push element onto stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // or throw new Error("Stack underflow");
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print stack elements
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10,20,30
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
stack.print(); // Output: 10,20


