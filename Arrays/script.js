"use strict";

(function () {
    var array1 = [1, 3, 7, 43, -31, 5, 312, 82, 10, 123, 121];

    console.log("Массив:", array1);

    function setDescendingSort(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    setDescendingSort(array1);

    console.log("Массив, отсортированный по убыванию: ", array1);

    function setSubArray1(array) {
       return array.slice(0, 5);
    }

    console.log("Первые пять элементов массива: ",  setSubArray1(array1));

    function setSubArray2(array) {
        return array.slice(array1.length - 5);
    }

    console.log("Последние пять элементов массива: ",  setSubArray2(array1));

    function setEvenNumberSum(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (e1, e2) {
            return e1 + e2;
        }, 0);
    }

    console.log("Сумма четных чисел массива: ", setEvenNumberSum(array1));
    
    function setArray2() {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    console.log("Массив чисел от 1 до 100: ", setArray2());

    function setEvenNumbersList(array) {
        return  array.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return Math.pow(e, 2);
        });
    }

    console.log("Квадраты четных чисел массива: ", setEvenNumbersList(setArray2()))
})();