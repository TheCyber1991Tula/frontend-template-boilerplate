// * Практика на асинхронность
console.warn('hello from Async!');

let result: string = '';
const flag = true;
const asData = () => new Promise((resolve, reject) => {
    if (flag) {
        setTimeout(() => {
            resolve(result = 'string');
        }, 2000);
    };
    reject = () => {
        result = 'Oooops!(';
    };
});

const runAsData = async () => {
    const getResult = await asData();
    // console.warn(`result is ${getResult}`);
};

runAsData();
