import $ from 'jquery';

// * Практика на работу с DOM-деревом

$(document).ready((): void => {
    // console.warn('hello from DOM! document is loaded successfully!');
});

const win: HTMLCollection = document.getElementsByTagName('body');
win[0].addEventListener('click', (event: any) => console.log(`${event.clientX} ${event.clientY}`));

// * генератор цветов

const getColor = (): string => {
    let result: string = '#';
    const symbols: string = '0123456789abcdef';
    for (let i: number = 0; i < 6; i++) {
        const symbol = symbols.charAt(Math.random() * symbols.length);
        result += symbol;
    }
    return result;
};

// * окраска блока в случайный цвет

const testBlock = $('#test').on('click', () => {
    testBlock.css({ 'background': getColor() });
});
