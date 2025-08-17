let number1 = "";
let number2 = "";
let operator = "";

const display = document.querySelector("#displayBottom");
const btns = Array.from(document.querySelectorAll("button"));

document.addEventListener("keydown",event => {
    respondToInput(event.key);
});

btns.forEach(btn =>{
    btn.addEventListener("click",() =>{
        respondToInput(btn.textContent);
    })
});

function updateOperand(updateValue){
    if (operator === ''){
        if(number1.length <= 15){
            number1 += updateValue;
            updateDisplay(number1);
        }
    }
    else {
        if(number2.length <= 15){
            number2 += updateValue;
            updateDisplay(number2);
        }
    }
}

function addDot(){
    if (operator === ''){
        if(number1.indexOf('.') === -1){
            if(number1 === "") {
                number1 = "0.";
                updateDisplay(number1);
            }
            else{
                number1 += '.';
                updateDisplay(number1);    
            }
        }
    }
    else {
        if(number2.indexOf('.') === -1){
            if(number2 === "") {
                number1 = "0.";
                updateDisplay(number2);
            }
            else{
                number2 += '.';
                updateDisplay(number2);    
            }
        }
    }
}

function checkIfAssignSign(sign){
    return ((number1 === "") || ((number2 === "") && (operator !== "")));
}

function updateDisplay(displayValue){
    if(displayValue.length <= 19) display.textContent = displayValue;
    else display.textContent = "Number is too large";
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

function deleteNumber(){
    if (operator === ''){
        if(number1 !== ""){
            number1 = number1.slice(0,number1.length-1);
            updateDisplay(number1);
        }
    }
    else {
        number2 = number2.slice(0,number2.length-1);
        updateDisplay(number2);
    }
}

function respondToInput(inputContent){
    switch(inputContent){
            case "+":
                if(checkIfAssignSign()){
                    updateOperand(inputContent);
                }
                else{
                    operate();
                    if(number1 !== inputContent){ 
                        operator = inputContent;
                    }//this condition is to resolve the issue if same sign has been entered multiple times 
                }
                break;

            case "-":
                if(checkIfAssignSign()){
                    updateOperand(inputContent);
                }
                else{
                    operate();
                    if(number1 !== inputContent){ 
                        operator = inputContent;
                    }
                }
                break;

            case "×":
                if(number1 === "+" || number1 === "-" || number1 =="");
                else{
                    operate();
                    operator = "*";
                }
                break;

            case "÷":
                if(number1 === "+" || number1 === "-" || number1 =="");
                else{
                    operate();
                    operator = "/";
                }
                break;
            
            case "*":
                if(number1 === "+" || number1 === "-" || number1 =="");
                else{
                    operate();
                    operator = "*";
                }
                break;

            case "/":
                if(number1 === "+" || number1 === "-" || number1 =="");
                else{
                    operate();
                    operator = "/";
                }
                break;
            
            case "=":
                operate();
                break;
            
            case "Enter":    
                operate();
                break;

            case "CLEAR":
                number1 = number2 = operator = '';
                updateDisplay('');
                break;
            
            case "Backspace":
                deleteNumber();
                break;

            case "DEL":
                deleteNumber();
                break;

            case ".":
                addDot();
                break;

            default:
                if( String(parseInt(inputContent)) !== "NaN" )updateOperand(inputContent); ;
    }
}