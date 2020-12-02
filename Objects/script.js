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
        var maxCitiesCountry = Object.create(countries).filter(function (e) {
                if (e.city.length > maxCitiesCount) {
                    maxCitiesCount = e.city.length;
                }

                return e.city.length === maxCitiesCount;
            }
        )

        console.log("Страны, с максимальным количеством городов", maxCitiesCountry);

        // noinspection ES6ConvertVarToLetConst
        var russiaPopulation = Object.create(russia.city).reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        // noinspection ES6ConvertVarToLetConst
        var japanPopulation = Object.create(japan.city).reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        // noinspection ES6ConvertVarToLetConst
        var francePopulation = Object.create(france.city).reduce(function (sum, e) {
            return sum + e.population;
        }, 0);

        // noinspection ES6ConvertVarToLetConst
        var sumPopulations = [russiaPopulation, japanPopulation, francePopulation];

        // noinspection ES6ConvertVarToLetConst
        var myCountries = countries.map(function (e) {
            return e.name
        });

        // noinspection ES6ConvertVarToLetConst
        var result = Object.create(myCountries).reduce(function (e, value, i ) {
            e[value] = sumPopulations[i];

            return e;
        }, {})

        console.log(result);
    }
)
()