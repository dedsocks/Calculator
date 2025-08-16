let number1 = "";
let number2 = "";
let operator = "";

const display = document.querySelector("#displayBottom");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach(btn =>{
    btn.addEventListener("click",event =>{
        switch(btn.textContent){
            case "+":
                operate();
                operator = "+";
                break;
            case "-":
                operate();
                operator = "-";
                break;
            case "×":
                operate();
                operator = "*";
                break;
            case "÷":
                operate();
                operator = "/";
                break;
            case "=":
                operate();
                break;
            case "CLEAR":
                number1 = number2 = operator = '';
                updateDisplay('');
                break;
            default:
                updateOperand(btn.textContent);
        }
    })
})

function updateOperand(updateValue){
    if (operator === ''){
        number1 += updateValue;
        updateDisplay(number1);
    }
    else {
        number2 += updateValue;
        updateDisplay(number2);
    }
}

function updateDisplay(displayValue){
    display.textContent = displayValue;
}

function operate(){
    switch(operator){
        case "+":
            addNumbers();
            break;
        case "-":
            subtractNumbers();
            break;
        case "*":
            multiplyNumbers();
            break;
        case "/":
            divideNumbers();
            break;
    }
}

function addNumbers(){
    number1 = String(parseInt(number1) + parseInt(number2));
    updateDisplay(number1);
    number2 = '';
    operator = '';
}

function subtractNumbers(){
    number1 = String(parseInt(number1) - parseInt(number2));
    updateDisplay(number1);
    number2 = '';
    operator = '';
}

function multiplyNumbers(){
    number1 = String(parseInt(number1) * parseInt(number2));
    updateDisplay(number1);
    number2 = '';
    operator = '';
}

function divideNumbers(){
    if(parseInt(number2) === 0 ){
        updateDisplay("Error");
        number1 = ''
        number2 = '';
        operator = '';
    }
    else{
        number1 = String(parseInt(number1) / parseInt(number2));
        updateDisplay(number1);
        number2 = '';
        operator = '';
    }
}