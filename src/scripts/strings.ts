// * Практика на строки
// console.warn('hello from Strings!');

// * разбитие строки на слова в массив

const stringForTest: string = 'lorem ipsum dolor sit amet';

function splitter(string: string): void {
    const arrFromString: string[] = string.split(' ');
    // console.log(`массив из строки ${arrFromString}`);
};
splitter(stringForTest);

// * поиск подстроки

function substringFinder(string: string): void {
    const subStr: string = string.substring(0, 5);
    // console.log(`Поиск подстроки ${subStr}`);
};
substringFinder(stringForTest);
