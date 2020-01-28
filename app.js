
var dispNum, numBtn;

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

// Event Listeners
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', displayNum, false);
};


/*
for (let i = 0; i < calcBtn.length; i++) {
    calcBtn[i].addEventListener('click', doCalculation); 
};
*/

dispVal = '0';

function displayNum (e) {
    btnText = e.target.innerText;
    dispVal += btnText;
    dispNum.innerText = dispVal;
}








