// * Практика на промисы
console.warn('hello from Promises!');

let test: string = '';
function timed() {
    if (true) {
        setTimeout(() => {
            test = 'не пустая строка';
            return test;
        }, 5000);
    };
};
