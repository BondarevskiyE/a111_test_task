// Задача 1. Передвинуть нули в конец массива
// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export function moveZeros(arr: Array<string | number>) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i] === '0') {
            arr.splice(i, 1);
            counter++;
            i--;
        }
    }

    for (let i = 0; i < counter; i++) {
        arr.push(0);
    }

    return arr;
}

export function declarativeMoveZeros(arr: Array<string | number>) {
    let result = arr.filter(item => +item !== 0);

    return result.concat(new Array(arr.length - result.length).fill(0))
}
