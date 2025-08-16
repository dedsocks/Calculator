let number1 = "";
let number2 = "";
let operator = "";
let numberIdentifyFlag = 1;//flag to identify which number to input 

const display = document.querySelector("#displayBottom");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach(btn =>{
    btn.addEventListener("click",event =>{
        switch(btn.textContent){
            case "+":
                operator = "+";
                break;
            case "-":
                operator = "-";
                break;
            case "×":
                operator = "*";
                break;
            case "÷":
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
            number1 = String(parseInt(number1) + parseInt(number2));
            updateDisplay(number1);
            number2 = '';
            operator = '';
            break;
        case "-":
            number1 = String(parseInt(number1) - parseInt(number2));
            updateDisplay(number1);
            number2 = '';
            operator = '';
            break;
        case "*":
            number1 = String(parseInt(number1) * parseInt(number2));
            updateDisplay(number1);
            number2 = '';
            operator = '';
            break;
        case "/":
            number1 = String(parseInt(number1) / parseInt(number2));
            updateDisplay(number1);
            number2 = '';
            operator = '';
            break;
    }
}
