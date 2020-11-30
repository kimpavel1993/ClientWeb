"use strict";

(function f() {
    // noinspection ES6ConvertVarToLetConst
    var array1 = [1, 3, 7, 43, -31, 5, 312, 82, 10, 123, 121];
    console.log("Массив:", array1);

    array1.sort(function (e1, e2) {
        return e2 - e1;
    })

    console.log("Массив, отсортированный по убыванию: ", array1)

    // noinspection ES6ConvertVarToLetConst
    var subarray1 = array1.slice(0, 5);
    console.log("Первые пять элементов массива: ", subarray1)

    // noinspection ES6ConvertVarToLetConst
    var subarray2 = array1.slice(array1.length - 5);
    console.log("Последние пять элементов массива: ", subarray2)

    // noinspection ES6ConvertVarToLetConst
    var evenNumbersArray1 = array1.filter(function (e) {
        return e % 2 === 0;
    })

    // noinspection ES6ConvertVarToLetConst
    var sumEvenNumbers = evenNumbersArray1.reduce(function (e1, e2) {
        return e1 + e2;
    })

    console.log("Сумма четных чисел массива: ", sumEvenNumbers)

    // noinspection ES6ConvertVarToLetConst
    var array2 = [];

    // noinspection ES6ConvertVarToLetConst
    for (var i = 1; i < 101; i++) {
        array2.push(i);
    }

    console.log("Массив чисел от 1 до 100: ", array2)

    // noinspection ES6ConvertVarToLetConst
    var evenNumbersArray2 = array2.filter(function (e) {
        return e % 2 === 0;
    })

    // noinspection ES6ConvertVarToLetConst
    var result = evenNumbersArray2.map(function (e) {
        return Math.pow(e, 2);
    });

    console.log("Квадраты четных чисел массива: ", result)
})
()