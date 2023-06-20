function operate(operator, a, b){
    switch (operator){
        case '+' : add(a,b);
        break;
        case '-' : subtract(a,b);
        break;
        case '*' : multiply(a,b);
        break;
        case '/' : divide(a,b);
        break;
    }
}
function add(){
    return a+b;
}

function subtract(){
    return a-b;
}

function multiply(){
    return a*b;
}

function divide(){
    return a/b;
}