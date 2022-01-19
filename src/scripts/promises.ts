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
}

const myNewPromise = new Promise((resolve, reject) => {
    resolve(() => {
        console.log(test);
    });

    reject(() => {
        throw new Error('не сработало!');
    });
});
