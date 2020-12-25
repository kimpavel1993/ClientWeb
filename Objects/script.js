"use strict";

(function () {
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

    var maxCitiesCountries = [];

    function showMaxCitiesCountry(countries) {
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

    showMaxCitiesCountry(countries);

    console.log("Страны, с максимальным количеством городов", maxCitiesCountries);

    countries.forEach(function (e) {
        var result = {};

        function showCountriesWithSumPopulation(countries) {
            var sumPopulation = countries.cities.reduce(function (sum, e) {
                return sum + e.population;
            }, 0);

            result = countries.name + ": " + sumPopulation;
        }

        showCountriesWithSumPopulation(e);

        console.log(result)
    });
})();