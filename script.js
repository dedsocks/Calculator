let number1 = "";
let number2 = "";
let operator = "";

const display = document.querySelector("#displayBottom");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach(btn =>{
    btn.addEventListener("click",event =>{
        switch(btn.textContent){
            case "+":
                if(checkIfAssignSign()){
                    updateOperand(btn.textContent);
                }
                else{
                    operate();
                    if(number1 !== btn.textContent){ 
                        operator = btn.textContent;
                    }//this condition is to resolve the issue if same sign has been entered multiple times 
                }
                break;

            case "-":
                if(checkIfAssignSign()){
                    updateOperand(btn.textContent);
                }
                else{
                    operate();
                    if(number1 !== btn.textContent){ 
                        operator = btn.textContent;
                    }
                }
                break;

            case "×":
                if(number1 !== ""){
                    operate();
                    operator = "*";
                }
                break;
            case "÷":
                if(number1 !== ""){
                    operate();
                    operator = "*";
                }
                break;
            case "=":
                operate();
                break;
            case "CLEAR":
                number1 = number2 = operator = '';
                updateDisplay('');
                break;
            case "DEL":
                break;
            case ".":
                addDot();
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

function addDot(){
    if (operator === ''){
        if(number1.indexOf('.') === -1){
            number1 += '.';
            updateDisplay(number1);
        }
    }
    else {
        if(number2.indexOf('.') === -1){
            number2 += '.';
            updateDisplay(number2);
        }
    }
}

function checkIfAssignSign(sign){
    return ((number1 === "") || ((number2 === "") && (operator !== "")));
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
    number1 = String(parseFloat(number1) + parseFloat(number2));
    updateDisplay(number1);
    number2 = '';
    operator = '';
}

function subtractNumbers(){
    number1 = String(parseFloat(number1) - parseFloat(number2));
    updateDisplay(number1);
    number2 = '';
    operator = '';
}

function multiplyNumbers(){
    number1 = String(parseFloat(number1) * parseFloat(number2));
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
        number1 = String(parseFloat(number1) / parseFloat(number2));
        updateDisplay(number1);
        number2 = '';
        operator = '';
    }
}