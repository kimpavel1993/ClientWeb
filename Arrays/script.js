"use strict";

(function () {
    var array1 = [1, 3, 7, 43, -31, 5, 312, 82, 10, 123, 121];

    console.log("Массив:", array1);

    function sortArrayByDescending(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    sortArrayByDescending(array1);

    console.log("Массив, отсортированный по убыванию: ", array1);

    function getFirstFiveElementsArray(array) {
       return array.slice(0, 5);
    }

    console.log("Первые пять элементов массива: ", getFirstFiveElementsArray(array1));

    function getLastFiveElementsArray(array) {
        return array.slice(array1.length - 5);
    }

    console.log("Последние пять элементов массива: ", getLastFiveElementsArray(array1));

    function getEvenNumbersSum(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (sum, e) {
            return sum + e;
        }, 0);
    }

    console.log("Сумма четных чисел массива: ", getEvenNumbersSum(array1));
    
    function getArray2() {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    console.log("Массив чисел от 1 до 100: ", getArray2());

    function getEvenNumbersList(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return Math.pow(e, 2);
        });
    }

    console.log("Квадраты четных чисел массива: ", getEvenNumbersList(getArray2()));
})();