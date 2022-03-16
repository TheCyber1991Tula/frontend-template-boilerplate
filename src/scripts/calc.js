console.log('hello from calc!');
// ! вводится несколько нулей в начале
// ! неправильно работает клавиша 00

const calcDisplay = document.getElementById('calc__display');

// * математические операции
// * сложение
const summary = document.getElementById('sum');
summary.addEventListener('click', () => {
    operation = '+';
    operand2 = calcDisplay.innerHTML;
    console.log(operation);
});

// * вычитание
const difference = document.getElementById('diff');
difference.addEventListener('click', () => {
    operation = '-';
    operand2 = calcDisplay.innerHTML;
    console.log(operation);
});

// * умножение
const multi = document.getElementById('mult');
multi.addEventListener('click', () => {
    operation = '*';
    operand2 = calcDisplay.innerHTML;
    console.log(operation);
});

// * деление
const divide = document.getElementById('div');
divide.addEventListener('click', () => {
    operation = '/';
    operand2 = calcDisplay.innerHTML;
    console.log(operation);
});

const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    if (!calcDisplay.innerHTML.includes('.')) {
        calcDisplay.innerHTML += '.';
        operand1 += '.';
    }
});

// * дополнительные функции
const plusMinus = document.getElementById('plusMinus');
const bksp = document.getElementById('bksp');
const sqrt = document.getElementById('sqrt');
const pow2 = document.getElementById('pow2');
const powX = document.getElementById('powX');

// * объявление переменных под числа и оператора
let operation = '';
let operand1 = '';
let operand2 = '';

// * получение значений цифровых клавиш
const numKeysCollection = document.getElementsByClassName('button__number');
for (let i = 0; i < numKeysCollection.length; i++) {
    numKeysCollection[i].addEventListener('click', () => {
        // * строковое значение также нужно
        const thisValue = numKeysCollection[i].value;
        const thisValueNum = Number(numKeysCollection[i].value);

        operand1 += thisValueNum;
        calcDisplay.innerHTML += thisValueNum;
        console.log(thisValue);
    });
};
