// 1
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
// };
// console.log(object.getMessage()); // What is logged?  'Hello World!'


// SOLUTION EXPLANATION
// 'Hello, World!' is logged to console. 

// object.getMessage() is a method invocation, that’s why this inside the method equals object.

// There’s also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn’t influence anyhow the value of this.message.


// // 2
// function Pet(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }
// const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged? 'Fluffy', becasue of arrow methods
// const { getName } = cat;
// console.log(getName());     // What is logged? 'Fluffy'

// SOLUTION EXPLANATION 
// 'Fluffy' and 'Fluffy' are logged to console. 

// When a function is invoked as a constructor new Pet('Fluffy'), this inside the constructor function equals the constructed object.

// this.name = name expression inside Pet constructor creates name property on the constructed object.

// this.getName = () => this.name creates a method getName on the constructed object. And since the arrow function is used, this inside the arrow function equals to this of the outer scope — the constructor function Pet.

// Invoking cat.getName(), as well as getName(), returns the expression this.name that evaluates to 'Fluffy'.


// 3
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged? 'undefined'
//   }
// };
// setTimeout(object.logMessage, 1000);

// SOLUTION EXPLANATION
// After a delay of 1 second, undefined is logged to console.

// While setTimeout() function uses the object.logMessage as a callback, still, it inovkes object.logMessage as a regular function, rather than a method.

// And during a regular function invocation this equals the global object, which is window in the case of the browser environment.

// That’s why console.log(this.message) inside logMessage method logs window.message, which is undefined.


// 4 How can you call logMessage function so that it logs "Hello, World!"?
// const object = {
//   message: 'Hello, World!'
// };
// function logMessage() {
//   console.log(this.message); // "Hello, World!"
// }
// SOLUTION
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     return this.message; // "Hello, World!"
//   }
// };
// console.log(object.logMessage())

// SOLUTION EXPLANATION
// There are at least 3 ways how to call logMessage() as a method on the object. Any of them is considered a correct answer:

// const object = {
//   message: 'Hello, World!'
// };
// function logMessage() {
//   console.log(this.message); // logs 'Hello, World!'
// }
// // Using func.call() method
// logMessage.call(object);
// // Using func.apply() method
// logMessage.apply(object);
// // Creating a bound function
// const boundLogMessage = logMessage.bind(object);
// boundLogMessage();

// 5
// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   }
// };
// console.log(object.greet());    // What is logged? 'Hello, World'
// console.log(object.farewell()); // What is logged? 'Goodbye, undefined' because of arrow function


// PROBLEM SOLUTION 
// 'Hello, World!' and 'Goodbye, undefined!' are logged to console. Try the demo.

// When calling object.greet(), inside the method greet() this value equals object because greet is a regular function. Thus object.greet() returns 'Hello, World!'.

// But farewell() is an arrow function, so this value inside of an arrow function always equals this of the outer scope.

// The outer scope of farewell() is the global scope, where this is the global object. Thus object.farewell() actually returns 'Goodbye, ${window.who}!', which evaluates to 'Goodbye, undefined!'

// 6
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged? '4'
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };
// object.method(callback, 1, 2);

// PROBLEM SOLUTION
// 4 is logged to console. Try the demo.

// callback() is called using regular function invocation inside method(). Since this value during a regular function invocation equals the global object, this.length is evaluated as window.length inside callback() function.

// The first statement var length = 4, being in the outermost scope, creates a property length on the global object: window.length becomes 4.

// Finally, inside the callback() function this.length evaluates as window.length — 4 being logged to console.

// 7
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   }
// };
// object.method(callback, 1, 2);

// PROBLEM SOLUTION
// 3 is logged to console. Try the demo.

// obj.method(callback, 1, 2) is invoked with 3 arguments: callback, 1 and 2. As result the arguments special variable inside method() is an array-like object of the following structure:

// {
//   0: callback,
//   1: 1, 
//   2: 2, 
//   length: 3 
// }
// Because arguments[0]() is a method invocation of callback on arguments object, this inside the callback equals arguments. As result this.length inside callback() is same as arguments.length — which is 3.