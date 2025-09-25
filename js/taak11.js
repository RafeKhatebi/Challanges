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

//4. Write a class Car with properties brand, model, and a method displayInfo().
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); // Car Brand: Toyota, Model: Corolla

//5. Explain prototype-based inheritance in JavaScript.
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}
Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.constructor = Dog; // Set the constructor property
Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};
const dog = new Dog("Rex");
dog.speak(); // Rex barks.

/* In JavaScript, every object has a prototype, which is another object from which it can inherit properties and methods. 
When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks at the object's prototype, and then the prototype's prototype, and so on, until it reaches the end of the prototype chain (usually Object.prototype). 
This allows for shared behavior among objects without duplicating code. You can create new objects that inherit from existing ones using Object.create() or by using constructor functions and the 'new' keyword. 
Prototype-based inheritance is dynamic, meaning that changes to the prototype are reflected in all objects that inherit from it.*/

//6. How do you create a private property in a JavaScript class?
class Person {
  #ssn; // private field

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn; // private property
  }
  //you should define a way to access the private property
  getSSN() {
    return this.#ssn; // controlled access
  }
}

const person = new Person("Alice", "123-45-6789");
console.log(person.name);
console.log(person.getSSN()); // 123-45-6789
// console.log(person.#ssn); // ❌ Error: Private field '#ssn' must be declared in an enclosing class
// you can not access the private property directly from outside the class
