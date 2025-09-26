/* Debugging
1.	What are the different types of errors in JavaScript?
2.	How can you debug a JavaScript program in the browser?
3.	What is the use of console.log(), and how can it help in debugging?
4.	Explain the purpose of try...catch in JavaScript.
5.	How do breakpoints help in debugging JavaScript code?
6.	What is the difference between throw and console.error()?
7.	Write a program that intentionally throws an error and catches it using try...catch.
8.	How can debugger be used in JavaScript?
9.	What is stack trace, and how can it help in debugging?
10.	What are some best practices for writing bug-free JavaScript code? */

// 1. Different types of errors in JavaScript
// Syntax Errors, Runtime Errors, Logical Errors

// 2. Debugging a JavaScript program in the browser
// Use browser developer tools (F12) to inspect elements, view console output, and set breakpoints.

// 3. Use of console.log()
// console.log() is used to print messages to the console, helping developers understand the flow of execution and inspect variable values.

// 4. Purpose of try...catch
// try...catch is used to handle exceptions gracefully, allowing the program to continue running even if an error occurs.

// 5. Breakpoints in debugging
// Breakpoints allow developers to pause code execution at a specific line, enabling them to inspect the current state and variables.

// 6. Difference between throw and console.error()
// throw is used to create a custom error, while console.error() is used to log an error message to the console without stopping execution.

// 7. Program that throws and catches an error
try {
    throw new Error("This is a custom error");
} catch (error) {
    console.error("Caught an error:", error.message);
}

// 8. Using debugger in JavaScript
// The debugger statement can be used to pause code execution and inspect variables in the developer tools.

// 9. Stack trace
// A stack trace shows the sequence of function calls that led to an error, helping developers identify the source of the problem.

// 10. Best practices for writing bug-free JavaScript code
// - Use strict mode
// - Validate user input
// - Write unit tests
// - Use version control
// - Keep code modular and maintainable