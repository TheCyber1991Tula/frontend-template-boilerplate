console.log('hello from calc!');

// ! при нажатии точки с пустым дисплеем вводится 0. и не получается ввести еще один ноль

// * declaring variables
let operation = '';
let operand1 = '';
let operand2 = '';
let memory = '';

const calcDisplay = document.getElementById('calc__display');

// * clear key
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    operand1 = '';
    operand2 = '';
    operation = '';
    calcDisplay.innerText = '';
});

// * MATH operations
// * addition
const summary = document.getElementById('sum');
summary.addEventListener('click', () => {
    operation = '+';
    operand1 = calcDisplay.innerText;
    console.log(operation);
});

// * subtraction
const difference = document.getElementById('diff');
difference.addEventListener('click', () => {
    operation = '-';
    operand1 = calcDisplay.innerText;
    console.log(operation);
});

// * multiplication
const multi = document.getElementById('mult');
multi.addEventListener('click', () => {
    operation = '*';
    operand1 = calcDisplay.innerText;
    console.log(operation);
});

// * divide
const divide = document.getElementById('div');
divide.addEventListener('click', () => {
    operation = '/';
    operand1 = calcDisplay.innerText;
    console.log(operation);
});

const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    if (calcDisplay.innerText === '') {
        calcDisplay.innerText = '0.';
    }
    if (!calcDisplay.innerText.includes('.')) {
        calcDisplay.innerText += '.';
        operand1 += '.';
    }
});

// * additional functions

// * reverse sign
const plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener('click', () => {
    // @ts-ignore
    calcDisplay.innerHTML -= 2 * calcDisplay.innerHTML;
});

// * backspace key
const bksp = document.getElementById('bksp');
bksp.addEventListener('click', () => {
    const slicer = calcDisplay.innerText.slice(0, calcDisplay.innerText.length - 1);
    calcDisplay.innerHTML = slicer;
});

// * square root
const sqrt = document.getElementById('sqrt');
sqrt.addEventListener('click', () => {
    const sqrtResult = Math.sqrt(calcDisplay.innerText).toPrecision(5);
    calcDisplay.innerHTML = sqrtResult;
});

const pow2 = document.getElementById('pow2');
const powX = document.getElementById('powX');
const memPlus = document.getElementById('memPlus');

// * memory clear
const memClear = document.getElementById('memClear');
memClear.addEventListener('click', () => {

});

// * number keys add event listeners
const numKeysCollection = document.getElementsByClassName('button__number');
for (let i = 0; i < numKeysCollection.length; i++) {
    numKeysCollection[i].addEventListener('click', () => {
        // @ts-ignore
        const thisValue = numKeysCollection[i].value;

        operand1 += thisValue;
        calcDisplay.innerHTML += thisValue;
        console.log(thisValue);
    });
};

// * zero button
const zeroButton = document.getElementById('button__number__zero');
zeroButton.addEventListener('click', evt => {
    if (calcDisplay.innerText === '' || calcDisplay.innerText[0] === '0') {
        console.log('error!');
    } else {
        calcDisplay.innerHTML += evt.target.value;
    }
});

// * double zero button
const doubleZeroButton = document.getElementById('button__number__doubleZero');
doubleZeroButton.addEventListener('click', evt => {
    if (calcDisplay.innerText === '' || calcDisplay.innerText[0] === '0') {
        console.log('error!');
    } else {
        calcDisplay.innerHTML += evt.target.value;
    }
});
