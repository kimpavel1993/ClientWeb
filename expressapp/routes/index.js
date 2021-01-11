var express = require("express");
var router = express.Router();

var contacts = [];
var newId = 1;

router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var result = term.length === 0
        ? contacts
        : contacts.filter(function (c) {
            return c.secondName.toUpperCase().indexOf(term) >= 0 || c.firstName.toUpperCase().indexOf(term) >= 0 || c.phone.toUpperCase().indexOf(term) >= 0;
        });

    res.send(result);
});

router.post("/api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

router.post("/api/createContact", function (req, res) {
    var contact = req.body.contact;

    if (!contact) {
        res.send({
            success: false,
            message: "Неверный формат данных"
        });

        return;
    }

    if (!contact.secondName) {
        res.send({
            success: false,
            message: "Введите фамилию контакта"
        });

        return;
    }

    if (!contact.firstName) {
        res.send({
            success: false,
            message: "Введите имя контакта"
        });

        return;
    }

    if (!contact.phone) {
        res.send({
            success: false,
            message: "Введите номер телефона"
        });

        return;
    }

    if (contacts.some(function (c) {
        return c.phone.toUpperCase() === contact.phone.toUpperCase();
    })) {
        res.send({
            success: false,
            message: "Уже есть пользователь с таким номером телефона"
        });

        return;
    }

    contact.id = newId;

    newId++;

    contacts.push(contact);

    res.send({
        success: true,
        message: null
    });
})

router.get("/", function (req, res) {
    res.render("index", {title: "PhoneBook Vue"});
});

module.exports = router;