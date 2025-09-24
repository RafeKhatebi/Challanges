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

/* JavaScript classes are syntactical sugar over the existing prototype-based inheritance and do not introduce a new object-oriented inheritance model. In contrast, languages like Java and C++ use class-based inheritance, where classes are blueprints for creating objects. Additionally, JavaScript supports dynamic typing and allows for more flexible object structures. */
