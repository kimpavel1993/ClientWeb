"use strict";

(function () {
        function Country(name) {
            this.name = name;
        }

        // noinspection ES6ConvertVarToLetConst
        var russia = new Country("Россия")
        // noinspection ES6ConvertVarToLetConst
        var japan = new Country("Япония")
        // noinspection ES6ConvertVarToLetConst
        var france = new Country("Франция")

        // noinspection ES6ConvertVarToLetConst
        var countries = [russia, japan, france];

        russia.city = [
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
        ];

        japan.city = [
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
        ];

        france.city = [
            {
                name: "Париж",
                population: 2148327
            },
            {
                name: "Марсель",
                population: 861635
            },
        ];

        console.log(countries);

        // noinspection ES6ConvertVarToLetConst
        var maxCitiesCount = 0;
        // noinspection ES6ConvertVarToLetConst
        var maxCitiesCountry = countries.filter(function (e) {
                if (e.city.length > maxCitiesCount) {
                    maxCitiesCount = e.city.length;
                }

                return e.city.length === maxCitiesCount;
            }
        )

        console.log("Страны, с максимальным количеством городов", maxCitiesCountry);

        // noinspection ES6ConvertVarToLetConst
        var myCountries = new Map();

        // noinspection ES6ConvertVarToLetConst
        var russiaPopulation = russia.city.reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        // noinspection ES6ConvertVarToLetConst
        var japanPopulation = japan.city.reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        // noinspection ES6ConvertVarToLetConst
        var francePopulation = france.city.reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        myCountries.set(russia, russiaPopulation);
        myCountries.set(japan, japanPopulation);
        myCountries.set(france, francePopulation);

        console.log(myCountries);
    }
)
()