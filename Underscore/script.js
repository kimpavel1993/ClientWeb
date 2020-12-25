$(document).ready(function () {
    var people = [
        {
            name: "Pavel",
            lastName: "Kim",
            age: 27
        },
        {
            name: "Anna",
            lastName: "Ivanova",
            age: 45
        },
        {
            name: "Olga",
            lastName: "Golubeva",
            age: 23
        },
        {
            name: "Nikita",
            lastName: "Kashirin",
            age: 14
        },
        {
            name: "Alexander",
            lastName: "Pushkin",
            age: 27
        },
        {
            name: "Nikolai",
            lastName: "Vasilkov",
            age: 52
        },
        {
            name: "Antonina",
            lastName: "Nosova",
            age: 20
        },
        {
            name: "Yulia",
            lastName: "Lobanova",
            age: 30
        },
        {
            name: "Alexey",
            lastName: "Fedoseenko",
            age: 24
        },
        {
            name: "Ekaterina",
            lastName: "Klimova",
            age: 21
        }
    ];

    var averageAge = {};

    function showPeopleAverageAge(people) {
        averageAge = _.chain(people)
            .pluck("age")
            .map(function (e) {
                return e / 10;
            })
            .reduce(function (sum, e) {
                return sum + e;
            }, 0)
            .value();
    }

    showPeopleAverageAge(people);

    console.log(averageAge);

    var filteredPeople = {};

    function showFilteredPeople(people) {
        filteredPeople = _.chain(people)
            .filter(function (e) {
                return e.age >= 20 && e.age <= 30;
            })
            .sortBy('age')
            .value();
    }

    showFilteredPeople(people);

    console.log(filteredPeople);

    var result = {};

    function getFullName(people) {
        result = _.chain(people)
            .map(function (e) {
                return _.extend(e, {fullName: e.name + " " + e.lastName})
            })
            .value();
    }

    getFullName(people);

    console.log(result);
})