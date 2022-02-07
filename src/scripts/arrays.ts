const arrWithNumbers: number[] = [1, 6, 4, 8, 0, 3, 2, 5, 4, 8, 5, 3];
const arrayWithNumbersUnique: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrWithNumbersAndStrings: any[] = [1, 2, 7, 8, 'a', '4', 's', 7, 2, 'x'];
const arrWithMonths: string[] = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
    'хуябрь',
];

// * сортировка массива
function sort(array: number[]): number[] {
    array.sort((a: number, b: number): number => a - b);
    console.log(`Отсортированный массив ${array}`);
    return array;
}
sort(arrWithNumbers);

// * фильтрование массива из чисел и строк, оставляем только числа
function arrFilter(array: any[]): void {
    const result = array.filter((elem: number | string) => typeof elem === 'number');
    console.log(`Массив только с числами ${result}`);
}
arrFilter(arrWithNumbersAndStrings);

// * наполнение массива случайными числами
function arrFill(count: number): number[] {
    const result = [];
    for (let i: number = 0; i <= count; i++) {
        const elem = Math.round(Math.random() * 100);
        result.push(elem);
    }
    return result;
}
console.log(`Наполненный масив ${arrFill(10)}`);
// * Теперь упорядочим этот массив
sort(arrFill(20));

// * Вывод в консоль месяца

function monthToconsole(array: string[]) {
    const month: number = 4;
    for (let i: number = 0; i <= array.length; i++) {
        if (i === month - 1) {
            console.log(array[i]);
        }
    }
}
monthToconsole(arrWithMonths);

// * поиск повторяющихся элементов

function findDuplicate(array: number[]): void {
    sort(array);
    for (let i: number = 0; i <= array.length; i++) {
        if (array[i] === array[i - 1]) {
            console.log(`Найдено повторяющееся число ${array[i]}`);
        }
    }
}
findDuplicate(arrWithNumbers);

// * Создание объекта из двух массивов
// ! Почему эта хуета не работает?!?!?!

const keysForObject: string[] = ['two', 'four', 'six', 'eight', 'ten'];
const valuesForObject: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface IResult {
    [key: string]: number;
}

const makeObject = (keys: string[], values: number[]): void => {
    const result: IResult = {};
    const valuesEven = values.filter(elem => elem % 2 === 0);
    console.log(valuesEven);

    for (let i: number = 0; i < valuesEven.length; i++) {
        const key: string = keys[i];
        const value: number = valuesEven[i];
        result[key] = value;
    }
    console.log(`Объект из двух массивов ${result}`);
};
makeObject(keysForObject, valuesForObject);

// * Поиск повторяющихся элементов в массивах

const arrayForComparison1 = [1, 2, 3, 4, 5, 6, 0];
const arrayForComparison2 = [3, 4, 6, 7, 8, 0];

function arrayComparison(array1: number[], array2: number[]): void {
    const result: number[] = [];
    array1.forEach((elem1: number) => {
        array2.forEach((elem2: number) => {
            if (elem1 === elem2) {
                result.push(elem1);
            }
        });
    });
    console.log(`числа повторяющиеся в массивах ${result}`);
}
arrayComparison(arrayForComparison1, arrayForComparison2);

// * rest spread оператор

const arrayForRestSpread: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(...arrayForRestSpread);

// * максимальное и минимальное значение в массивах

const arrayForMinMax1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //* методом min / max
const arrayForMinMax2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //* методом array.sort

function sortArrMinMax(array: number[]): void {
    const resultMin = Math.min(...array);
    const resultMax = Math.max(...array);
    console.log(`Наименьшее значение ${resultMin}`);
    console.log(`Максимальное значение ${resultMax}`);
}
sortArrMinMax(arrayForMinMax1);

function sortArrClassic(array: number[]): void {
    array.sort((a, b) => b - a);
    const first = array[0];
    const last = array[array.length - 1];

    console.log(`наибольшее значение из массива ${last}`);
    console.log(`наименьшее значение из массива ${first}`);
}
sortArrClassic(arrayForMinMax2);

// * Методы массивов и объектов

interface ITest333 {
    first: string;
    second: string;
    third: string;
}
const test333: ITest333 = {
    first: 'value1',
    second: 'value2',
    third: 'value3',
};
console.log(Object.values(test333));

// * метод flat

const arrForFlat = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
];
console.log(`flat array ${arrForFlat.flat(1)}`);
