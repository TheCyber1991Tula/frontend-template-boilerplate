console.log('hello!');

// *числа фибоначчи

const fibonacci = iterCount => {
    const fibNums = [1, 2];
    // следующее число
    for (let i = 0; i <= iterCount; i++) {
        const numberToPush = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
        fibNums.push(numberToPush);
    };
    return fibNums;
};
console.log(fibonacci(10));

// *генератор цветов

const getColor = () => {
    let result = '#';
    const symbols = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        const symbol = symbols.charAt(Math.random() * symbols.length);
        result += symbol;
    }
    console.log(`цвет ${result}`);
};
getColor();

// * практика с объектами

// * практика с функциями

const win = document.getElementsByTagName('body');
win[0].addEventListener('click', event => console.log(`${event.clientX} ${event.clientY}`));
