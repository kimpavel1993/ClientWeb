"use strict";

(function () {
    var array1 = [1, 3, 7, 43, -31, 5, 312, 82, 10, 123, 121];

    console.log("Массив:", array1);

    function showDescendingSort(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    showDescendingSort(array1);

    console.log("Массив, отсортированный по убыванию: ", array1);
    
    var subarray1 = [];
    var subarray2 = [];

    function showSubArray(array) {
        subarray1 = array.slice(0, 5);
        subarray2 = array.slice(array1.length - 5);
    }

    showSubArray(array1);

    console.log("Первые пять элементов массива: ", subarray1);
    console.log("Последние пять элементов массива: ", subarray2);
    
    var evenNumbersSum = 0;

    function showEvenNumberSum(array) {
        evenNumbersSum = array.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (e1, e2) {
            return e1 + e2;
        }, 0);
    }

    showEvenNumberSum(array1);

    console.log("Сумма четных чисел массива: ", evenNumbersSum);
    
    var array2 = [];
    
    for (var i = 1; i <= 100; i++) {
        array2.push(i);
    }

    console.log("Массив чисел от 1 до 100: ", array2);
    
    var result = [];

    function showEvenNumbersList(array) {
        result = array.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return Math.pow(e, 2);
        });
    }

    showEvenNumbersList(array2);

    console.log("Квадраты четных чисел массива: ", result)
})();