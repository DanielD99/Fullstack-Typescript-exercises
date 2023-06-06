function calculate (x, y, operation) {
    return operation(x, y);
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
    return x / y;
}

console.log(calculate(2, 3, subtract));
console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));
console.log(calculate(2, 3, divide));


