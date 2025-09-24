/*
1.	What are the four pillars of Object-Oriented Programming?
2.	Define and provide an example of encapsulation in JavaScript.
3.	How do JavaScript classes differ from traditional classes in languages like Java or C++?
4.	Write a class Car with properties brand, model, and a method displayInfo().
5.	Explain prototype-based inheritance in JavaScript.
6.	How do you create a private property in a JavaScript class?
7.	What is method overriding, and how can it be implemented in JavaScript?
8.	Write an example demonstrating polymorphism in JavaScript.
9.	What is the purpose of super() in JavaScript classes?
10.	Explain the difference between composition and inheritance.

*/
/*1. What are the four pillars of Object-Oriented Programming?
 The four pillars of Object-Oriented Programming are Encapsulation, Abstraction, Inheritance, and Polymorphism. */
//2. Define and provide an example of encapsulation in JavaScript.
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
  }

  getBalance() {
    return this.#balance; // controlled access
  }
}

const acc = new BankAccount(200);
acc.deposit(50);
acc.withdraw(100);
console.log(acc.getBalance()); // 150
// console.log(acc.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class

//3. How do JavaScript classes differ from traditional classes in languages like Java or C++?
/* JavaScript classes are syntactical sugar over its existing prototype-based inheritance. They do not have traditional class-based inheritance like Java or C++. 
JavaScript classes support dynamic typing, while Java and C++ are statically typed. 
JavaScript classes can be modified at runtime, whereas traditional classes are more rigid.
JavaScript classes do not support access modifiers like public, private, and protected in the same way as Java or C++.
JavaScript classes support first-class functions, allowing functions to be passed as arguments, returned from other functions, and assigned to variables. 
JavaScript classes are not hoisted, meaning they cannot be used before they are declared. In contrast, function declarations in JavaScript are hoisted.*/
