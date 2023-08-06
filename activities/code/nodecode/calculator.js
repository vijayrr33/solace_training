const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function performOperation(operator, num1, num2) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log("Error: Invalid operator.");
      return;
  }
  console.log(`Result: ${result}`);
}

function startCalculator() {
  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the operator (+, -, /): ", (operator) => {
      rl.question("Enter the second number: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        performOperation(operator, num1, num2);
        rl.close();
      });
    });
  });
}

startCalculator();
