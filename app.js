
let dispNum, pendingVal, numBtn, calcBtn, clearBtn, evalStringArray, btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, evaluation;

dispNum = document.getElementById('display-output');

btn0 = document.querySelector('.num-btn-0');
btn1 = document.querySelector('.num-btn-1');
btn2 = document.querySelector('.num-btn-2');
btn3 = document.querySelector('.num-btn-3');
btn4 = document.querySelector('.num-btn-4');
btn5 = document.querySelector('.num-btn-5');
btn6 = document.querySelector('.num-btn-6');
btn7 = document.querySelector('.num-btn-7');
btn8 = document.querySelector('.num-btn-8');
btn9 = document.querySelector('.num-btn-9');
numBtn = document.getElementsByClassName('num-btn');
calcBtn = document.getElementsByClassName('calc-btn');

clearBtn = document.getElementById('clear-scrn');
backSpaceBtn = document.getElementById('back-space');
decBtn = document.getElementById('dec-btn');

// Event Listeners
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', displayNum, false);
};

for (let i = 0; i < calcBtn.length; i++) {
    calcBtn[i].addEventListener('click', doCalculation); 
};

clearBtn.addEventListener('click', clearDisplay);
backSpaceBtn.addEventListener('click', backSpace);

//  Output number to display
dispVal = '0';
pendingVal;
evalStringArray = [];

function displayNum (e) {
    btnText = e.target.innerText;

    if (dispVal === '0') {
        dispVal = '';
    }

    dispVal += btnText;
    dispNum.innerText = dispVal;
};

function clearDisplay () {
    dispNum.innerText = '0';
    dispVal = '';
    evalStringArray = [];
};

function backSpace () {
    dispVal = dispVal.slice(0, dispVal.length - 1);

    if(dispVal === '') 
    dispVal = '0';

    dispNum.innerText = dispVal;
};

decBtn.onclick = function () {
    if (!dispVal.includes('.')) {
        dispVal += '.';
    }
    dispNum.innerText = dispVal;
}



//  Do calculations
function doCalculation (e) {
    let operator = e.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = dispVal;
            dispVal = '0';
            dispNum.innerText = dispVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = dispVal;
            dispVal = '0';
            dispNum.innerText = dispVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '*':
            pendingVal = dispVal;
            dispVal = '0';
            dispNum.innerText = dispVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = dispVal;
            dispVal = '0';
            dispNum.innerText = dispVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(dispVal)
            evaluation = eval(evalStringArray.join(' '));
            dispVal = evaluation + '';
            dispNum.innerText = dispVal;
            evalStringArray = [];
        default:
            break;
    }
}







