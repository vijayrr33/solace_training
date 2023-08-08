const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // Simulating asynchronous operation
  });
}

function subtract(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a - b);
    }, 1000); // Simulating asynchronous operation
  });
}

function multiply(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000); // Simulating asynchronous operation
  });
}

function divide(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (b === 0) {
        resolve('Cannot divide by zero');
      } else {
        resolve(a / b);
      }
    }, 1000); // Simulating asynchronous operation
  });
}

function calculatePercentage(total, percentage) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = (percentage / 100) * total;
      resolve(result);
    }, 1000); // Simulating asynchronous operation
  });
}

async function performCalculations() {
  rl.question('Enter the first number: ', async num1 => {
    rl.question('Enter the second number: ', async num2 => {
      const additionResult = await add(parseFloat(num1), parseFloat(num2));
      console.log('Addition Result:', additionResult);

      const subtractionResult = await subtract(parseFloat(num1), parseFloat(num2));
      console.log('Subtraction Result:', subtractionResult);

      const multiplicationResult = await multiply(parseFloat(num1), parseFloat(num2));
      console.log('Multiplication Result:', multiplicationResult);

      const divisionResult = await divide(parseFloat(num1), parseFloat(num2));
      console.log('Division Result:', divisionResult);

      const total = parseFloat(num1);
      const percentage = parseFloat(num2);
      const percentageResult = await calculatePercentage(total, percentage);
      console.log(`${percentage}% of ${total} is ${percentageResult}`);

      rl.close();
    });
  });
}

performCalculations();
