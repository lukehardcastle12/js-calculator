//display
const display = document.querySelector('.display');
display.textContent;
let numBtns = document.querySelector('.numbers');
let btnChildren = numBtns.children
console.log(btnChildren);
for (i of btnChildren){
    i.addEventListener('click',function(){
        display.textContent += this.innerHTML;
    });  
}
//push functions to display
let functionBtns = document.querySelector('.functions');
let functionsChildren = functionBtns.children
for (i of functionsChildren){
    i.addEventListener('click',function(){
        display.textContent += this.innerHTML;
    });
}
document.getElementById('clear')
.addEventListener('click',() => display.textContent = "");

function operate(a, operator, b){
    let firstNumber = a,
    secondNumber = b,
    findOperator = operator;
    switch (findOperator){
        case '+' : display.textContent = add(firstNumber,secondNumber);
        break;
        case '-' : display.textContent = subtract(firstNumber,secondNumber);
        break;
        case '*' : display.textContent = multiply(firstNumber,secondNumber);
        break;
        case '/' : display.textContent = divide(firstNumber,secondNumber);
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