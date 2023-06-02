//class exercise 2

function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }

  arr = [1,2,3,4,5,6,7,8,9,10]

 function multiplyByNineteen(arr){
    return arr.map(x => x * 19)
 }

 function subtractByNineteen(arr){
    return arr.map(x => x - 19 )
 }

 const multiplySubtractByNineteen = (arr) =>{
    const multiplied = multiplyByNineteen(arr)
    const subtracted = subtractByNineteen(multiplied)
    return subtracted;
    
 }

  const subtract = (x,y) => x - y;
  
  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }
  
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));  // 12
  console.log(operateOnNumbers(subtract, 4,3)); // 1
  console.log(multiplySubtractByNineteen(arr))