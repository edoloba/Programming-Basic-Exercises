class Calculator {
  constructor() {
    //properties
  }
  pi() {
    console.log(`This is pi: ${Math.PI}`);
  }
  e() {
    console.log(`This is e: ${Math.E}`);
  }
  //getter

  //methods
  ratio(x, y, width) {
      console.log(`Ratio: ${((x * y) / width).toFixed(2)}`);
  }
  percentage(x, y) {
    console.log(`Percentage: ${(x / y) * 100}`);
  }
  add(x, y) {
    console.log(`Addition: ${x + y}`);
  }
  subtract(x, y) {
    console.log(`Subtraction: ${x - y}`);
  }
  multiply(x, y) {
    console.log(`Multiplication: ${x - y}`);
  }
  divide(x, y) {
    if (y != 0) {
      console.log(`Division: ${x / y}`);
    } else {
      console.log(`Division by 0: 0`);
    }
  }
  modulation(x, y) {
    if (y != 0) {
      console.log(`Module: ${x % y}`);
    } else {
      console.log(`Module 0 return the first value(x): ${x}`);
    }
  }
  elevate(x, y) {
    console.log(`Power: ${Math.pow(x, y)}`);
  }
  sqrt(x) {
    console.log(`Square root: ${Math.sqrt(x).toFixed(2)}`);
  }
}
let calculate = new Calculator();
calculate.pi();
calculate.e();
calculate.ratio(16, 4, 22);
calculate.percentage(10, 5);
calculate.add(10, 5);
calculate.subtract(10, 5);
calculate.multiply(10, 5);
calculate.divide(10, 5);
calculate.divide(10, 0);
calculate.modulation(10, 5);
calculate.modulation(10, 0);
calculate.elevate(10, 5);
calculate.sqrt(10);
