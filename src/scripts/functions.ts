// * Практика с функциями
console.warn('hello from Functions!');

// * перегрузка функций

const arr2 = [1, 2, 3, 4, 5, 6];
const sum = (args: string[] | number[]): void => {
    if (typeof args[0] === 'string') {
        console.log('Вы передали массив строк');
    } else if (typeof args[0] === 'number') {
        console.log('Вы передали массив чисел');
    }
};

sum(arr2);

// *числа фибоначчи

const fibonacci = (iterCount: number): number[] => {
    const fibNums: number[] = [1, 2];
    // следующее число
    for (let i: number = 0; i <= iterCount; i++) {
        const numberToPush: number = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
        fibNums.push(numberToPush);
    }
    return fibNums;
};
console.log(fibonacci(10));

// * генератор цветов

const getColor = (): void => {
    let result: string = '#';
    const symbols: string = '0123456789abcdef';
    for (let i: number = 0; i < 6; i++) {
        const symbol = symbols.charAt(Math.random() * symbols.length);
        result += symbol;
    }
    console.log(`цвет ${result}`);
};
getColor();
