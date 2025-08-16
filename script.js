let number1 = "";
let number0 = "";
let operator = "";
let numberIdentifyFlag = 1;//flag to identify which number to input 

const display = document.querySelector("#displayBottom");
const btns = Array.from(document.querySelectorAll("button"));

btns.forEach(btn =>{
    btn.addEventListener("click", event =>{
        switch (btn.textContent){
            case '+':
                if(operator) operate(number1,number0,operator);
                if(!number1){
                    assignNumber('+');
                }
                else {
                    operator = '+';
                    numberIdentifyFlag = !numberIdentifyFlag;
                }
                break;
            case '-':
                if(operator) operate(number1,number0,operator);
                if(!number1){
                    assignNumber('-');
                }
                else {
                    operator = '-';
                    numberIdentifyFlag = !numberIdentifyFlag;
                }
                break;
            case '×':
                break;
            case '÷':
                break;
            case 'CLEAR':
                number1 = number0 = operator = '';
                updateDisplay('');
                break;
            default:
                assignNumber(btn.textContent);
        }
    })
})

function assignNumber(inputDigit){
    if(numberIdentifyFlag) {
        number1 += inputDigit;
        updateDisplay(number1);
    }
    else {
        number0 += inputDigit;
        updateDisplay(number0)
    }
}

function updateDisplay(inputNumber){
    display.textContent = inputNumber;
}

function operate(num1,num0,op){
    switch(op){
        case '+':
            number1 = String(parseInt(num1) + parseInt(num0));
            updateDisplay(number1);
            number0 = '';
            break;
        case '-':
            number1 = String(parseInt(num1) - parseInt(num0));
            updateDisplay(number1);
            number0 = '';
            break;
    }
}

