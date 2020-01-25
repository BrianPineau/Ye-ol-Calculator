
var dispNum, numBtn;

dispNum = document.getElementById('display-output');

numBtn = document.getElementsByClassName('num-btn');
calcBtn = document.getElementsByClassName('calc-btn');

// Event Listeners
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', displayNum, false);
};

for (let i = 0; i < calcBtn.length; i++) {
    calcBtn[i].addEventListener('click', doCalculation); 
};



function displayNum () {
    let inputArr = [];
    dispNum.innerHTML = '';

    if (dispNum) {
        inputArr.push(`${num-btn-}`)
    }

    console.log('Da-na-na-naaa!');
};




