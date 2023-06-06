function calculate (x, y, operation) {
    return new Promise((resolve, reject) => {
        try{
            const result = operation(x, y);
            resolve(result);
        } catch (error) {
            reject(error);
        }
        });
}

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y){
    if (y === 0 || x === 0) {
        throw new Error("Can't divide by 0");
    }
    return x / y;
}

(async () => {
    try {
      const result1 = await calculate(2, 3, subtract);
      console.log('Result:', result1);
  
      const result2 = await calculate(2, 3, add);
      console.log('Result:', result2);
  
      const result3 = await calculate(2, 3, multiply);
      console.log('Result:', result3);
  
      const result4 = await calculate(2, 0, divide);
      console.log('Result:', result4);
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();