//display
const display = document.querySelector('.display');
display.textContent = "1020485";

function operate(a, operator, b){
    let firstNumber = a,
    secondNumber = b,
    findOperator = operator;
    switch (findOperator){
        case '+' : return add(firstNumber,secondNumber);
        break;
        case '-' : return subtract(firstNumber,secondNumber);
        break;
        case '*' : return multiply(firstNumber,secondNumber);
        break;
        case '/' : return divide(firstNumber,secondNumber);
        break;
    }
}
function add(a, b){
    let firstNumber = a,
    secondNumber = b;
    return firstNumber + secondNumber;
}

function subtract(a, b){
    let firstNumber = a,
    secondNumber = b;
    return firstNumber - secondNumber;
}

function multiply(a, b){
    let firstNumber = a,
    secondNumber = b;
    return firstNumber * secondNumber;
}

function divide(a, b){
    let firstNumber = a,
    secondNumber = b;
    return firstNumber / secondNumber;
}