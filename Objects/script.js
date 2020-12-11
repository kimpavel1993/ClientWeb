"use strict";

(function () {
    // noinspection ES6ConvertVarToLetConst
    var countries = [
        {
            name: "Россия",
            cities: [
                {
                    name: "Москва",
                    population: 12678079
                },
                {
                    name: "Новосибирск",
                    population: 1625631
                },
                {
                    name: "Санкт-Петербург",
                    population: 5398064
                }
            ]
        },
        {
            name: "Япония",
            cities: [
                {
                    name: "Токио",
                    population: 14002973
                },
                {
                    name: "Киото",
                    population: 1463444
                },
                {
                    name: "Осака",
                    population: 2717953
                }
            ]
        },
        {
            name: "Франция",
            cities: [
                {
                    name: "Париж",
                    population: 2148327
                },
                {
                    name: "Марсель",
                    population: 861635
                },
            ]
        }
    ];

    console.log(countries);

    function getMaxCitiesCountry() {

        // noinspection ES6ConvertVarToLetConst
        var maxCitiesCount = 0

        // noinspection ES6ConvertVarToLetConst
        countries.forEach(function (e) {
            if (maxCitiesCount < e.cities.length) {
                maxCitiesCount = e.cities.length
            }
        })

        // noinspection ES6ConvertVarToLetConst
        var maxCitiesCountry = countries.filter(function (e) {
            return e.cities.length >= maxCitiesCount;
        })

        console.log("Страны, с максимальным количеством городов", maxCitiesCountry);
    }

    getMaxCitiesCountry();

    function getCountriesWithSumPopulation() {
        countries.forEach(function (e) {
            // noinspection ES6ConvertVarToLetConst
            var count = 0;

            e.cities.forEach(function (e) {
                count += e.population;

            })

            e.sumPopulation = count;
        });

        // noinspection ES6ConvertVarToLetConst
        var result = countries.reduce(function (e, value) {
            // noinspection JSUnresolvedVariable
            e[value.name] = value.sumPopulation;

            return e;
        }, {});

        console.log(result);
    }

    getCountriesWithSumPopulation();
})();