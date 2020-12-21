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
                }
            ]
        }
    ];

    console.log(countries);

    // noinspection ES6ConvertVarToLetConst
    var maxCitiesCountries = [];

    function setMaxCitiesCountry(countries) {
        // noinspection ES6ConvertVarToLetConst
        var maxCitiesCount = countries.reduce(function (count, e) {
            if (count < e.cities.length) {
                count = e.cities.length;
            }

            return count;
        }, 0);

        maxCitiesCountries = countries.filter(function (e) {
            return e.cities.length === maxCitiesCount;
        });
    }

    setMaxCitiesCountry(countries);

    console.log("Страны, с максимальным количеством городов", maxCitiesCountries);

    function setCountriesWithSumPopulation(countries) {
        countries.forEach(function (e) {
            // noinspection ES6ConvertVarToLetConst
            var sumPopulation = e.cities.reduce(function (sum, e) {
                return sum + e.population;
            }, 0);

           // noinspection ES6ConvertVarToLetConst
            var result = e.name + ": " + sumPopulation;

            console.log(result);
        });
    }

    setCountriesWithSumPopulation(countries);
})();