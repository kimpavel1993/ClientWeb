var people = [
    {
        name: 'Pavel',
        lastName: 'Kim',
        age: 27
    },
    {
        name: 'Anna',
        lastName: "Ivanova",
        age: 45
    },
    {
        name: 'Olga',
        lastName: "Golubeva",
        age: 23
    },
    {
        name: 'Nikita',
        lastName: "Kashirin",
        age: 14
    },
    {
        name: 'Alexander',
        lastName: 'Pushkin',
        age: 27
    },
    {
        name: 'Nikolai',
        lastName: 'Vasilkov',
        age: 52
    },
    {
        name: 'Antonina',
        lastName: 'Nosova',
        age: 20
    },
    {
        name: 'Yulia',
        lastName: 'Lobanova',
        age: 30
    },
    {
        name: 'Alexey',
        lastName: 'Fedoseenko',
        age: 24
    },
    {
        name: 'Ekaterina',
        lastName: 'Klimova',
        age: 21
    }
];

function setPeopleAverageAge(people) {
    return _.chain(people)
        .pluck('age')
        .reduce(function (sum, e) {
            return sum + e / 10;
        }, 0)
        .value();
}

console.log(setPeopleAverageAge(people));

function setFilteredPeople(people) {
    return _.chain(people)
        .filter(function (e) {
            return e.age >= 20 && e.age <= 30;
        })
        .sortBy('age')
        .value();
}

console.log(setFilteredPeople(people));

function setFullName() {
    return people.map(function (e) {
        return _.extend(e, { fullName: e.name + " " + e.lastName })
    });
}

console.log(setFullName());