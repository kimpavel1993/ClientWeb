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

    function setMaxCitiesCountry(countries) {
        return countries.filter(function (e) {
            return e.cities.length === countries.reduce(function (count, e) {
                return Math.max(count, e.cities.length);
            }, 0);
        });
    }

    console.log("Страны, с максимальным количеством городов", setMaxCitiesCountry(countries));

    function setCountriesWithSumPopulation(countries) {
        var result = {};

        countries.forEach(function (e) {
            result[e.name] = e.cities.reduce(function (sum, e) {
                return sum + e.population;
            }, 0);
        });

        return result;
    }

    console.log(setCountriesWithSumPopulation(countries));
})();