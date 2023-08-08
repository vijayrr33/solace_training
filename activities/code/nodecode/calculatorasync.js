const async = require('async');

function add(a, b, callback) {
  callback(null, a + b);
}

function subtract(a, b, callback) {
  callback(null, a - b);
}

function multiply(a, b, callback) {
  callback(null, a * b);
}

function divide(a, b, callback) {
  if (b === 0) {
    callback("Division by zero is not allowed");
  } else {
    callback(null, a / b);
  }
}

async.series([
  function(callback) {
    console.log("Welcome to the calculator!");
    callback();
  },
  function(callback) {
    const num1 = 10;
    const num2 = 5;
    const operation = '+';

    let operationFn;
    switch (operation) {
      case '+':
        operationFn = add;
        break;
      case '-':
        operationFn = subtract;
        break;
      case '*':
        operationFn = multiply;
        break;
      case '/':
        operationFn = divide;
        break;
      default:
        return callback("Invalid operation");
    }

    operationFn(num1, num2, callback);
  }
], function(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Result: ${results[1]}`);
  }
});
