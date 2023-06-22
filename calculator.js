//display
const display = document.querySelector('.display');
display.textContent;
let btns = document.querySelector('.buttons');
let btnChildren = btns.children
console.log(btnChildren);
for (i of btnChildren){
    i.addEventListener('click',function(){
        display.textContent += this.innerHTML;
    });
    
}
let clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click',() => clear());

//make buttons push to display
function displayNumber(i){
    buttonPressed = i;
    switch (buttonPressed){
        case 0 : display.textContent += '7';
                console.log(buttonPressed);
                break;
    }
}
function clear(){
    display.textContent = "";
}

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