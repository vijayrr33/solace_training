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
    const num1 = 10;
    const num2 = 5;
  
    const additionResult = await add(num1, num2);
    console.log('Addition Result:', additionResult);
  
    const subtractionResult = await subtract(num1, num2);
    console.log('Subtraction Result:', subtractionResult);
  
    const multiplicationResult = await multiply(num1, num2);
    console.log('Multiplication Result:', multiplicationResult);
  
    const divisionResult = await divide(num1, num2);
    console.log('Division Result:', divisionResult);
  
    const total = 200;
    const percentage = 20;
    const percentageResult = await calculatePercentage(total, percentage);
    console.log(`${percentage}% of ${total} is ${percentageResult}`);
  }
  
  performCalculations();
  
