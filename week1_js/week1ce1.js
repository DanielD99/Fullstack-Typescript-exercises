//class exercise 1

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const greeting = (name) => {
    //console.log(`Hello, ${name}!`)
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const nameLength = name.length;
    console.log(`Hello, ${capitalizedName}!`)
    console.log(`you have, ${nameLength} letters in your name :O`)
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }
  
  processUserInput(greeting);